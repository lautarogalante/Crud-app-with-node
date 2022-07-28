import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
//find para buascar objetos dentro de la conleccion.
//lean sirve para que devuelva objetos de js.

    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks});
});

router.post('/tasks/add', async (req, res)=> {
    try {
    const task = Task(req.body)
    await task.save();
    res.redirect("/");
    }catch(error){
        console.error(error);
    }
});

router.get('/about', (req, res) => { 
    res.render('about'); 
});

router.get('/edit/:id', async (req, res) => {
    try{
        //se usa req.params.id para ver el id a editar con req.params.id
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', { task: task});
    }catch(error){
        console.log(error.message);
    }
});

router.post('/edit/:id', async (req, res) => {
    
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

router.get('/toggleDone/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    task.done = !task.done;
    await task.save();
    res.redirect('/');
})

export default router; 
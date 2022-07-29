import Task from "../models/Task";

export const renderTask = async (req, res) => {    
    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks});
};

export const createTask = async (req, res)=> {
    try {
    const task = Task(req.body)
    await task.save();
    res.redirect("/");
    }catch(error){
        console.error(error);
    }
};

export const renderTaskEdit = async (req, res) => {
    try{
        //se usa req.params.id para ver el id a editar con req.params.id
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', { task: task});
    }catch(error){
        console.log(error.message);
    }
};

export const editTask = async (req, res) => {
    
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/');
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

export const toggleDone = async (req, res) => {
    const task = await Task.findById(req.params.id)
    task.done = !task.done;
    await task.save();
    res.redirect('/');
};
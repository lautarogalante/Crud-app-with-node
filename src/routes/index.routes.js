import { Router } from 'express';
import Task from '../models/Task';
import { renderTask, createTask, renderTaskEdit, editTask, deleteTask, toggleDone } from '../controllers/task.controller';

const router = Router();

router.get('/', renderTask);

router.post('/tasks/add', createTask);

router.get('/tasks/:id/toggleDone',toggleDone);

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);

router.get('/tasks/:id/delete', deleteTask);


export default router; 

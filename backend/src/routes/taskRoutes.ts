import { Router } from 'express';
import { getTasks, addTask } from '../controllers/taskController';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', addTask);

export default router;

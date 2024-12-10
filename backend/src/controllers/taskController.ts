import { Request, Response } from 'express';
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'metalurgica_db'
});

// Buscar todas as tarefas
export const getTasks = (req: Request, res: Response) => {
  connection.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
};

// Adicionar uma nova tarefa
export const addTask = (req: Request, res: Response) => {
  const { taskName, startDate, endDate, progress, status } = req.body;
  connection.query(
    'INSERT INTO tasks (taskName, startDate, endDate, progress, status) VALUES (?, ?, ?, ?, ?)',
    [taskName, startDate, endDate, progress, status],
    (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error adding task' });
      }
      res.status(200).json({ message: 'Task added successfully' });
    }
  );
};

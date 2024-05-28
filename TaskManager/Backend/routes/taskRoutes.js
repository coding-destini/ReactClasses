const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/tasks/search', taskController.getTasks);

module.exports = router;

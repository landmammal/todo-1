const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/todo');

// parsing form data
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false})

// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get( '/', todoController.allTodos );

// Post for tasks: posting a task
router.post( '/tasks', urlEncoded, todoController.addTask );

// Delete for task: deleting specify task
router.delete( "/tasks/:id", todoController.removeTask );

module.exports = router;
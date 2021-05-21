const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/', controller.getIndex);

router.get('/todo/:id', controller.getTodo);

router.get('/todos', controller.getTodos);

router.post('/todo', controller.postTodo);

router.put('/todo/:id', controller.updateTodo);

router.delete('/todo/:id', controller.deleteTodo);

module.exports = router;

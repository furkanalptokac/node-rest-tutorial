const mongoose = require('mongoose');
const { Todo } = require('../models/Todo');

exports.getIndex = async (req, res) => {
    res.send('Hello, index!!!');
};

exports.postTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title
        });

        const todo = await newTodo.save();

        res.json(todo);
    } catch (err) {
        res.status(500).send('Server error.');
        console.error(err.message);
    }
};

exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ msg: 'Todo bulunamadı' });
        }

        res.json(todo);
    } catch (err) {
        res.status(500).send('Server error.');
        console.error(err.message);
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Server error.');
        console.error(err.message);
    }
};

exports.updateTodo = async (req, res) => {
    try {
        Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title
        });
        res.json({ result: 'Successful.' });
    } catch (err) {
        res.status(500).send('Server error.');
        console.error(err.message);
    }
};

exports.deleteTodo = async (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error.');
        } else {
            res.json({ result: result });
        }
    })
};

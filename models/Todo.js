const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = mongoose.model('Todo', new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true }
));

exports.Todo = Todo;

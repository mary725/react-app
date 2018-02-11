var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var TodoSchema = Schema({
    title: String,
    isDone: Boolean,
    description: String
});

mongoose.model('Todo', TodoSchema);
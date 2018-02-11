var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CategorySchema = Schema({
    categoryName: String,
    childrenList: Array
});

mongoose.model('Category', CategorySchema);
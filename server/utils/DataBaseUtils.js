import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Todo';
import '../models/Category';

const Todo = mongoose.model('Todo');
const Category = mongoose.model('Category');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function getTodos() {
    return Todo.find();
}

export function createTodo(data) {
    const todo = new Todo({
        title: data.title,
        isDone: data.isDone,
        description: data.description
    });

    return todo.save();
}

export function deleteTodo(id) {
    return Todo.findById(id).remove();
}

export function getCategories() {
    return Category.find();
}

export function createCategory(data) {
    const category = new Category({
        categoryName: data.categoriesTree,
        childrenList: data.childrenList
    });

    return category.save();
}

export function deleteCategory(id) {
    return Category.findById(id).remove();
}
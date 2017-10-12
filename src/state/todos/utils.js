import _ from 'lodash';

export const deleteTodo = (data, categoryId, todoId) => {
    let todos = {...data};
    let categoryTodos = [...todos[categoryId] || []];

    _.remove(categoryTodos, todo => todo.id === todoId);
    todos[categoryId] = categoryTodos;

    return todos;
};

export const editTodo = (data, { categoryId, item }) => {
    let todos = {...data};
    let categoryTodos = [...todos[categoryId]];
    let index = _.findIndex(categoryTodos, todo => todo.id === item.id);

    categoryTodos[index] = {
        ...categoryTodos[index],
        ...item
    };

    todos[categoryId] = categoryTodos;

    return todos;
};

export const moveTodo = (data, oldCategoryId, newCategoryId, todoId) => {
    let todos = {...data};
    const oldCategoryTodos = todos[oldCategoryId];
    const item = _.cloneDeep(_.find(oldCategoryTodos, todo => todo.id === todoId));
    const newCategoryTodos = todos[newCategoryId] || [];

    todos = deleteTodo(todos, oldCategoryId, todoId);

    todos[newCategoryId] = [ ...newCategoryTodos,
        item];

    return todos;
};
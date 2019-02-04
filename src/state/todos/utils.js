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

export const filterTodos = (todos, filterParams) => {
    return _.filter(todos, todo => {
        let isShow = true;

        if (filterParams.isDone) {
            isShow = isShow && todo.isDone === filterParams.isDone;
        }
        if (filterParams.searchString && filterParams.searchString.length) {
            isShow = isShow && _.includes(todo.title.toLowerCase(), filterParams.searchString.toLowerCase());
        }

        return isShow;
    });
};
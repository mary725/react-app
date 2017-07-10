import { createSelector } from 'reselect';
import _ from 'lodash';

import { getFilterParams } from '../filter/selectors';

const getTodos = createSelector(
    (state) => _.get(state, 'todos.data'),
    todos => todos
);

export const getTodosCount = createSelector(
    getTodos,
    (todos) => {
        let count = 0;

        _.forOwn(todos, categoryTodos => {
            count += _.size(categoryTodos);
        });

        return count;
    }
);

export const getDoneTodosCount = createSelector(
    getTodos,
    (todos) => {
        let count = 0;

        _.forOwn(todos, categoryTodos => {
            count += _.size(_.filter(categoryTodos, todo => todo.isDone));
        });

        return count;
    }
);

export const getTodoById = createSelector(
    getTodos,
    (state, categoryId, todoId) => categoryId,
    (state, categoryId, todoId) => todoId,
    (todos, categoryId, todoId) => {
        return _.find(todos[categoryId], todo => todo.id === _.toInteger(todoId));
    }
);

export const getTodosByCategoryId = createSelector(
    getTodos,
    getFilterParams,
    (state, categoryId) => categoryId,
    (todos, filterParams, categoryId) => {
        const todosByCategory = _.get(todos, `${categoryId}`, []);

        return _.filter(todosByCategory, todo => {
            let isShow = true;

            if (filterParams.isDone) {
                isShow = isShow && todo.isDone === filterParams.isDone;
            }
            if (filterParams.searchString && filterParams.searchString.length) {
                isShow = isShow && _.includes(todo.title.toLowerCase(), filterParams.searchString.toLowerCase());
            }

            return isShow;
        });
    }
);


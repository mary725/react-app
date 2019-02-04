import { createSelector } from 'reselect';
import _ from 'lodash';

import { getFilterParams } from '../filter/selectors';
import { filterTodos } from './utils';

const getTodosStructure = createSelector(
    (state) => _.get(state, 'todos.data'),
    todos => todos
);

export const getTodosCount = createSelector(
    getTodosStructure,
    (todos) => {
        let count = 0;

        _.forOwn(todos, categoryTodos => {
            count += _.size(categoryTodos);
        });

        return count;
    }
);

export const getDoneTodosCount = createSelector(
    getTodosStructure,
    (todos) => {
        let count = 0;

        _.forOwn(todos, categoryTodos => {
            count += _.size(_.filter(categoryTodos, todo => todo.isDone));
        });

        return count;
    }
);

export const getTodoById = createSelector(
    getTodosStructure,
    (state, categoryId, todoId) => categoryId,
    (state, categoryId, todoId) => todoId,
    (todos, categoryId, todoId) => {
        return _.find(todos[categoryId], todo => todo.id === _.toInteger(todoId));
    }
);

export const getTodosByCategoryId = createSelector(
    getTodosStructure,
    getFilterParams,
    (state, categoryId) => categoryId,
    (todos, filterParams, categoryId) => {
        const todosByCategory = _.get(todos, `${categoryId}`, []);

        return filterTodos(todosByCategory, filterParams);
    }
);

export const getAllTodos = createSelector(
    getTodosStructure,
    getFilterParams,
    (todos, filterParams) => {
        const allTodos = _.flatten(_.values(todos));

        return filterTodos(allTodos, filterParams);
    }
);


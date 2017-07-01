import { createSelector } from 'reselect';
import _ from 'lodash';

import { getFilterParams } from '../filter/selectors';

const getTodos = createSelector(
    (state) => _.get(state, 'todos'),
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

export const getTodosByCategoryId = createSelector(
    (state, categoryId) => {
        const filterParams = getFilterParams(state);
        const todosByCategory = _.get(state, `todos.${categoryId}`, []);

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
    },
    todos => todos
);


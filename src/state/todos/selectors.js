import { createSelector } from 'reselect';
import _ from 'lodash';

export const getTodosCount = createSelector(
    (state) => {
        let count = 0;

        _.forOwn(state.todos, categoryTodos => {
            count += _.size(categoryTodos);
        });

        return count;
    },
    count => count
);

export const getDoneTodosCount = createSelector(
    (state) => {
        let count = 0;

        _.forOwn(state.todos, categoryTodos => {
            count += _.size(_.filter(categoryTodos, todo => todo.isDone));
        });

        return count;
    },
    count => count
);

export const getTodosByCategoryId = createSelector(
    (state, categoryId) => {
        return _.get(state, `todos.${categoryId}`, []);
    },
    todos => todos
);


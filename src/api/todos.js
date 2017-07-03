import _ from 'lodash';

import initialState from '../mocks/initialState';

export const getTodos = () => {
    return Promise.resolve(initialState.todos);
};

export const addTodo = (item) => {
    return Promise.resolve(_.uniqueId());
};

export const editTodo = (item, categoryId) => {
    return Promise.resolve(null);
};
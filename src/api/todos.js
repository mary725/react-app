import _ from 'lodash';

import initialState from '../mocks/initialState';
import { DELAY } from './constants/config';

export const getTodos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(initialState.todos);
        }, DELAY);
    });
};

export const addTodo = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_.toNumber(_.uniqueId()));
        }, DELAY);
    });
};

export const editTodo = (item, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};

export const deleteTodo = (todoId, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};

export const moveTodoToOtherCategory = (todoId, oldCategoryId, newCategoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};
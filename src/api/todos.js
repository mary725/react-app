import axios from 'axios';
import _ from 'lodash';

import initialState from '../mocks/initialState';
import { DELAY } from './constants/config';

import { apiPrefix } from '../../etc/config.json';

export const getTodos = () => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(initialState.todos);
        }, DELAY);
    });*/
    return axios.get(`${apiPrefix}/todos`)
        .then(res => res.data);
};

export const addTodo = (item) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_.toNumber(_.uniqueId()));
        }, DELAY);
    });*/
    return axios.post(`${apiPrefix}/todos`, item);
};

export const editTodo = (item, categoryId) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });*/
    return axios.post(`${apiPrefix}/todos`, item);
};

export const deleteTodo = (todoId, categoryId) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });*/
    return axios.delete(`${apiPrefix}/todos/${todoId}`);
};

export const moveTodoToOtherCategory = (todoId, oldCategoryId, newCategoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};
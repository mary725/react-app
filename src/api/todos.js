import axios from 'axios';
import _ from 'lodash';

import { apiPrefix } from '../../etc/config.json';
import { DEFAULT_API_PREFIX } from './constants/config';

const usedApiPrefix = process.env.__MOCKS__ ? DEFAULT_API_PREFIX : apiPrefix;

export const getTodos = () => {
    return axios.get(`${usedApiPrefix}/getTodos`)
        .then(res => res.data);
};

export const addTodo = (item) => {
    return axios.post(`${usedApiPrefix}/createTodo`, item)
        .then(res => res.data);
};

export const editTodo = (item, categoryId) => {
    return axios.post(`${usedApiPrefix}/updateTodo/${item.id}`, item)
        .then(res => res.data);
};

export const deleteTodo = (todoId, categoryId) => {
    return axios.post(`${usedApiPrefix}/deleteTodo/${todoId}`)
        .then(res => res.data);
};

export const moveTodoToOtherCategory = (todoId, oldCategoryId, newCategoryId) => {
    return axios.post(`${usedApiPrefix}/moveTodo/${todoId}/${oldCategoryId}/${newCategoryId}`)
        .then(res => res.data);
};
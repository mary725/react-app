import axios from 'axios';
import _ from 'lodash';

import initialState from '../mocks/initialState';
import { DELAY } from './constants/config';

import { apiPrefix } from '../../etc/config.json';

export const getCategories = () => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(initialState.categories);
        }, DELAY);
    });*/
    return axios.get(`${apiPrefix}/categories`)
        .then(res => res.data);
};

export const addCategory = (categoryName, parentId) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_.toNumber(_.uniqueId()));
        }, DELAY);
    });*/
    return axios.post(`${apiPrefix}/categories`, categoryName);
};

export const deleteCategory = (id) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });*/
    return axios.delete(`${apiPrefix}/categories/${id}`);
};

export const editCategory = (id, categoryName) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });*/
    return axios.post(`${apiPrefix}/categories`, categoryName);
};
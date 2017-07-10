import _ from 'lodash';

import initialState from '../mocks/initialState';
import { DELAY } from './constants/config';

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(initialState.categories);
        }, DELAY);
    });
};

export const addCategory = (categoryName, parentId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_.toNumber(_.uniqueId()));
        }, DELAY);
    });
};

export const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};

export const editCategory = (id, categoryName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, DELAY);
    });
};
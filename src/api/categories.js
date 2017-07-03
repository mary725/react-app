import _ from 'lodash';

import initialState from '../mocks/initialState';

export const getCategories = () => {
    return Promise.resolve(initialState.categories);
};

export const addCategory = (categoryName, parentId) => {
    return Promise.resolve(_.uniqueId());
};

export const deleteCategory = (id) => {
    return Promise.resolve(null);
};

export const editCategory = (id, categoryName) => {
    return Promise.resolve(null);
};
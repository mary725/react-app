import axios from 'axios';
import _ from 'lodash';

import { apiPrefix } from '../../etc/config.json';
import { DEFAULT_API_PREFIX } from './constants/config';

const usedApiPrefix = process.env.__MOCKS__ ? DEFAULT_API_PREFIX : apiPrefix;

export const getCategories = () => {
    return axios.get(`${usedApiPrefix}/getCategories`)
        .then(res => res.data);
};

export const addCategory = (categoryName, parentId) => {
    return axios.post(`${usedApiPrefix}/createCategories`, categoryName)
        .then(res => res.data);
};

export const deleteCategory = (id) => {
    return axios.post(`${usedApiPrefix}/deleteCategory/${id}`)
        .then(res => res.data);
};

export const editCategory = (id, categoryName) => {
    return axios.post(`${usedApiPrefix}/updateCategory/${id}`, categoryName)
        .then(res => res.data);
};
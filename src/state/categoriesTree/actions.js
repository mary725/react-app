import * as api from '../../api';
import { DELETE_TODOS_BY_CATEGORY_ID } from '../todos/actions';

export const GET_CATEGORIES_ASYNC_REQUEST = 'GET_CATEGORIES_ASYNC_REQUEST';
export const GET_CATEGORIES_ASYNC_SUCCESS = 'GET_CATEGORIES_ASYNC_SUCCESS';
export const GET_CATEGORIES_ASYNC_ERROR = 'GET_CATEGORIES_ASYNC_ERROR';

export const ADD_CATEGORY_ASYNC_REQUEST = 'ADD_CATEGORY_ASYNC_REQUEST';
export const ADD_CATEGORY_ASYNC_SUCCESS = 'ADD_CATEGORY_ASYNC_SUCCESS';
export const ADD_CATEGORY_ASYNC_ERROR = 'ADD_CATEGORY_ASYNC_ERROR';

export const DELETE_CATEGORY_ASYNC_REQUEST = 'DELETE_CATEGORY_ASYNC_REQUEST';
export const DELETE_CATEGORY_ASYNC_SUCCESS = 'DELETE_CATEGORY_ASYNC_SUCCESS';
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';

export const EDIT_CATEGORY_ASYNC_REQUEST = 'EDIT_CATEGORY_ASYNC_REQUEST';
export const EDIT_CATEGORY_ASYNC_SUCCESS = 'EDIT_CATEGORY_ASYNC_SUCCESS';
export const EDIT_CATEGORY_ASYNC_ERROR = 'EDIT_CATEGORY_ASYNC_ERROR';

export const getCategories = () => dispatch => {
    dispatch({
        type: GET_CATEGORIES_ASYNC_REQUEST
    });

    api.getCategories()
        .then(
            (data) => {
                dispatch({
                    type: GET_CATEGORIES_ASYNC_SUCCESS,
                    payload: {
                        data
                    }
                });
            },
            error => {
                dispatch({
                    type: GET_CATEGORIES_ASYNC_ERROR,
                    payload: error.message
                });
            });
};

export const addCategory = (categoryName, parentId) => dispatch => {
    dispatch({
        type: ADD_CATEGORY_ASYNC_REQUEST
    });

    api.addCategory(categoryName, parentId)
        .then(
            (id) => {
                dispatch({
                    type: ADD_CATEGORY_ASYNC_SUCCESS,
                    payload: {
                        item: {
                            categoryName
                        },
                        itemId: id,
                        parentId
                    }
                });
            },
            error => {
                dispatch({
                    type: ADD_CATEGORY_ASYNC_ERROR,
                    payload: error.message
                });
            });
};

export const deleteCategory = (id) => dispatch => {
    dispatch({
        type: DELETE_CATEGORY_ASYNC_REQUEST
    });

    api.deleteCategory(id)
        .then(
            () => {
                dispatch({
                    type: DELETE_CATEGORY_ASYNC_SUCCESS,
                    payload: {
                        id
                    }
                });
                dispatch({
                    type: DELETE_TODOS_BY_CATEGORY_ID,
                    payload: {
                        id
                    }
                });
            },
            error => {
                dispatch({
                    type: DELETE_CATEGORY_ERROR,
                    payload: error.message
                });
            });
};

export const editCategory = (id, categoryName) => dispatch => {
    dispatch({
        type: EDIT_CATEGORY_ASYNC_REQUEST
    });

    api.editCategory(id, categoryName)
        .then(
            () => {
                dispatch({
                    type: EDIT_CATEGORY_ASYNC_SUCCESS,
                    payload: {
                        id,
                        categoryName
                    }
                });
            },
            error => {
                dispatch({
                    type: EDIT_CATEGORY_ASYNC_ERROR,
                    payload: error.message
                });
            });
};
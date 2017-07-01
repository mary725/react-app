import {
    GET_CATEGORIES_ASYNC,
    GET_CATEGORIES_ASYNC_REQUEST,
    GET_CATEGORIES_ASYNC_SUCCESS,
    GET_CATEGORIES_ASYNC_ERROR,
    ADD_CATEGORY_ASYNC,
    ADD_CATEGORY_ASYNC_REQUEST,
    ADD_CATEGORY_ASYNC_SUCCESS,
    ADD_CATEGORY_ASYNC_ERROR,
    DELETE_CATEGORY_ASYNC,
    DELETE_CATEGORY_ASYNC_REQUEST,
    DELETE_CATEGORY_ASYNC_SUCCESS,
    DELETE_CATEGORY_ERROR,
    EDIT_CATEGORY_ASYNC,
    EDIT_CATEGORY_ASYNC_REQUEST,
    EDIT_CATEGORY_ASYNC_SUCCESS,
    EDIT_CATEGORY_ASYNC_ERROR
} from './actions';
import * as api from '../../api';

export const getCategoriesMiddleware = store => next => action => {
    if (action.type === GET_CATEGORIES_ASYNC) {
        const { dispatch } = store;

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
    }

    next(action);
};

export const addCategoryMiddleware = store => next => action => {
    if (action.type === ADD_CATEGORY_ASYNC) {
        const { dispatch } = store;

        dispatch({
            type: ADD_CATEGORY_ASYNC_REQUEST
        });

        api.getCategories()
            .then(
                (data) => {
                    dispatch({
                        type: ADD_CATEGORY_ASYNC_SUCCESS,
                        payload: {
                            data
                        }
                    });
                },
                error => {
                    dispatch({
                        type: ADD_CATEGORY_ASYNC_ERROR,
                        payload: error.message
                    });
                });
    }

    next(action);
};

export const deleteCategoryMiddleware = store => next => action => {
    if (action.type === DELETE_CATEGORY_ASYNC) {
        const { dispatch } = store;

        dispatch({
            type: DELETE_CATEGORY_ASYNC_REQUEST
        });

        api.getCategories()
            .then(
                () => {
                    dispatch({
                        type: DELETE_CATEGORY_ASYNC_SUCCESS,
                        payload: {
                            ...action.payload
                        }
                    });
                },
                error => {
                    dispatch({
                        type: DELETE_CATEGORY_ERROR,
                        payload: error.message
                    });
                });
    }

    next(action);
};

export const editCategoryMiddleware = store => next => action => {
    if (action.type === EDIT_CATEGORY_ASYNC) {
        const { dispatch } = store;

        dispatch({
            type: EDIT_CATEGORY_ASYNC_REQUEST
        });

        api.getCategories()
            .then(
                () => {
                    dispatch({
                        type: EDIT_CATEGORY_ASYNC_SUCCESS,
                        payload: {
                            ...action.payload
                        }
                    });
                },
                error => {
                    dispatch({
                        type: EDIT_CATEGORY_ASYNC_ERROR,
                        payload: error.message
                    });
                });
    }

    next(action);
};


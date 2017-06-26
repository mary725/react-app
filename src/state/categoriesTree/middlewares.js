import {
    GET_CATEGORIES_ASYNC,
    GET_CATEGORIES_ASYNC_REQUEST,
    GET_CATEGORIES_ASYNC_SUCCESS,
    GET_CATEGORIES_ASYNC_ERROR
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

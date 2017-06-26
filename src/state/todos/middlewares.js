import {
    GET_TODOS_ASYNC,
    GET_TODOS_ASYNC_REQUEST,
    GET_TODOS_ASYNC_SUCCESS,
    GET_TODOS_ASYNC_ERROR
} from './actions';
import * as api from '../../api';

export const getTodosMiddleware = store => next => action => {
    if (action.type === GET_TODOS_ASYNC) {
        const { dispatch } = store;

        dispatch({
            type: GET_TODOS_ASYNC_REQUEST
        });

        api.getTodos()
            .then(
                (data) => {
                    dispatch({
                        type: GET_TODOS_ASYNC_SUCCESS,
                        payload: {
                            data
                        }
                    });
                },
                error => {
                    dispatch({
                        type: GET_TODOS_ASYNC_ERROR,
                        payload: error.message
                    });
                });
    }

    next(action);
};

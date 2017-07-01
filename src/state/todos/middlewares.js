import {
    GET_TODOS_ASYNC,
    GET_TODOS_ASYNC_REQUEST,
    GET_TODOS_ASYNC_SUCCESS,
    GET_TODOS_ASYNC_ERROR,
    EDIT_TODO_ASYNC,
    EDIT_TODO_ASYNC_REQUEST,
    EDIT_TODO_ASYNC_SUCCESS,
    EDIT_TODO_ASYNC_ERROR
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

export const updateTodoMiddleware = store => next => action => {
    if (action.type === EDIT_TODO_ASYNC) {
        const { dispatch } = store;

        dispatch({
            type: EDIT_TODO_ASYNC_REQUEST
        });

        api.getTodos()
            .then(
                () => {
                    dispatch({
                        type: EDIT_TODO_ASYNC_SUCCESS,
                        payload: {
                            ...action.payload
                        }
                    });
                },
                error => {
                    dispatch({
                        type: EDIT_TODO_ASYNC_ERROR,
                        payload: error.message
                    });
                });
    }

    next(action);
};

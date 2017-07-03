import * as api from '../../api';

export const GET_TODOS_ASYNC_REQUEST = 'GET_TODOS_ASYNC_REQUEST';
export const GET_TODOS_ASYNC_SUCCESS = 'GET_TODOS_ASYNC_SUCCESS';
export const GET_TODOS_ASYNC_ERROR = 'GET_TODOS_ASYNC_ERROR';

export const ADD_TODO_ASYNC_REQUEST = 'ADD_TODO_ASYNC_REQUEST';
export const ADD_TODO_ASYNC_SUCCESS = 'ADD_TODO_ASYNC_SUCCESS';
export const ADD_TODO_ASYNC_ERROR = 'ADD_TODO_ASYNC_ERROR';

export const EDIT_TODO_ASYNC_REQUEST = 'EDIT_TODO_ASYNC_REQUEST';
export const EDIT_TODO_ASYNC_SUCCESS = 'EDIT_TODO_ASYNC_SUCCESS';
export const EDIT_TODO_ASYNC_ERROR = 'EDIT_TODO_ASYNC_ERROR';

export const getTodos = () => dispatch => {
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
};

export const addTodo = (item) => dispatch => {
    dispatch({
        type: ADD_TODO_ASYNC_REQUEST
    });

    api.addTodo(item)
        .then(
            (id) => {
                item.id = id;

                dispatch({
                    type: ADD_TODO_ASYNC_SUCCESS,
                    payload: {
                        item
                    }
                });
            },
            error => {
                dispatch({
                    type: ADD_TODO_ASYNC_ERROR,
                    payload: error.message
                });
            });
};

export const editTodo = (item, categoryId) => dispatch => {
    dispatch({
        type: EDIT_TODO_ASYNC_REQUEST
    });

    api.editTodo(item, categoryId)
        .then(
            () => {
                dispatch({
                    type: EDIT_TODO_ASYNC_SUCCESS,
                    payload: {
                        item,
                        categoryId
                    }
                });
            },
            error => {
                dispatch({
                    type: EDIT_TODO_ASYNC_ERROR,
                    payload: error.message
                });
            });
};
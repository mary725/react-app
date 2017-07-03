export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC';
export const GET_TODOS_ASYNC_REQUEST = 'GET_TODOS_ASYNC_REQUEST';
export const GET_TODOS_ASYNC_SUCCESS = 'GET_TODOS_ASYNC_SUCCESS';
export const GET_TODOS_ASYNC_ERROR = 'GET_TODOS_ASYNC_ERROR';

export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const ADD_TODO_ASYNC_REQUEST = 'ADD_TODO_ASYNC_REQUEST';
export const ADD_TODO_ASYNC_SUCCESS = 'ADD_TODO_ASYNC_SUCCESS';
export const ADD_TODO_ASYNC_ERROR = 'ADD_TODO_ASYNC_ERROR';

export const EDIT_TODO_ASYNC = 'EDIT_TODO_ASYNC';
export const EDIT_TODO_ASYNC_REQUEST = 'EDIT_TODO_ASYNC_REQUEST';
export const EDIT_TODO_ASYNC_SUCCESS = 'EDIT_TODO_ASYNC_SUCCESS';
export const EDIT_TODO_ASYNC_ERROR = 'EDIT_TODO_ASYNC_ERROR';

export function getTodos() {
    return {
        type: GET_TODOS_ASYNC
    };
};

export function addTodo(item) {
    return {
        type: ADD_TODO_ASYNC,
        payload: {
            item
        }
    };
};

export function editTodo(item, categoryId) {
    return {
        type: EDIT_TODO_ASYNC,
        payload: {
            item,
            categoryId
        }
    };
};
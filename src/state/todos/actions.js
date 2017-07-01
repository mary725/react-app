export const ADD_TODO = 'ADD_TODO';

export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC';
export const GET_TODOS_ASYNC_REQUEST = 'GET_TODOS_ASYNC_REQUEST';
export const GET_TODOS_ASYNC_SUCCESS = 'GET_TODOS_ASYNC_SUCCESS';
export const GET_TODOS_ASYNC_ERROR = 'GET_TODOS_ASYNC_ERROR';

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
        type: ADD_TODO,
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
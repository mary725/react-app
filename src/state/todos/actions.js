export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';

export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC';
export const GET_TODOS_ASYNC_REQUEST = 'GET_TODOS_ASYNC_REQUEST';
export const GET_TODOS_ASYNC_SUCCESS = 'GET_TODOS_ASYNC_SUCCESS';
export const GET_TODOS_ASYNC_ERROR = 'GET_TODOS_ASYNC_ERROR';

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

export function editTodo(item) {
    return {
        type: EDIT_TODO,
        payload: {
            item
        }
    };
};

export function filterTodos(isDone, searchString) {
    return {
        type: FILTER_TODOS,
        payload: {
            isDone,
            searchString
        }
    };
};

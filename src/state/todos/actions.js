export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';

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

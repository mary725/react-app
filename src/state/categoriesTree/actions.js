export const GET_CATEGORIES_ASYNC = 'GET_CATEGORIES_ASYNC';
export const GET_CATEGORIES_ASYNC_REQUEST = 'GET_CATEGORIES_ASYNC_REQUEST';
export const GET_CATEGORIES_ASYNC_SUCCESS = 'GET_CATEGORIES_ASYNC_SUCCESS';
export const GET_CATEGORIES_ASYNC_ERROR = 'GET_CATEGORIES_ASYNC_ERROR';

export const ADD_CATEGORY_ASYNC = 'ADD_CATEGORY_ASYNC';
export const ADD_CATEGORY_ASYNC_REQUEST = 'ADD_CATEGORY_ASYNC_REQUEST';
export const ADD_CATEGORY_ASYNC_SUCCESS = 'ADD_CATEGORY_ASYNC_SUCCESS';
export const ADD_CATEGORY_ASYNC_ERROR = 'ADD_CATEGORY_ASYNC_ERROR';

export const DELETE_CATEGORY_ASYNC = 'DELETE_CATEGORY_ASYNC';
export const DELETE_CATEGORY_ASYNC_REQUEST = 'DELETE_CATEGORY_ASYNC_REQUEST';
export const DELETE_CATEGORY_ASYNC_SUCCESS = 'DELETE_CATEGORY_ASYNC_SUCCESS';
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';

export const EDIT_CATEGORY_ASYNC = 'EDIT_CATEGORY_ASYNC';
export const EDIT_CATEGORY_ASYNC_REQUEST = 'EDIT_CATEGORY_ASYNC_REQUEST';
export const EDIT_CATEGORY_ASYNC_SUCCESS = 'EDIT_CATEGORY_ASYNC_SUCCESS';
export const EDIT_CATEGORY_ASYNC_ERROR = 'EDIT_CATEGORY_ASYNC_ERROR';

export function getCategories() {
    return {
        type: GET_CATEGORIES_ASYNC
    };
};

export function addCategory(categoryName, parentId) {
    return {
        type: ADD_CATEGORY_ASYNC,
        payload: {
            item: {
                categoryName
            },
            parentId
        }
    };
};

export function deleteCategory(id) {
    return {
        type: DELETE_CATEGORY_ASYNC,
        payload: {
            id
        }
    };
};

export function editCategory(id, categoryName) {
    return {
        type: EDIT_CATEGORY_ASYNC,
        payload: {
            id,
            categoryName
        }
    };
};
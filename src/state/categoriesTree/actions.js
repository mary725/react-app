export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const GET_CATEGORIES_ASYNC = 'GET_CATEGORIES_ASYNC';
export const GET_CATEGORIES_ASYNC_REQUEST = 'GET_CATEGORIES_ASYNC_REQUEST';
export const GET_CATEGORIES_ASYNC_SUCCESS = 'GET_CATEGORIES_ASYNC_SUCCESS';
export const GET_CATEGORIES_ASYNC_ERROR = 'GET_CATEGORIES_ASYNC_ERROR';

export function getCategories() {
    return {
        type: GET_CATEGORIES_ASYNC
    };
};

export function addCategory(categoryName, parentId) {
    return {
        type: ADD_CATEGORY,
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
        type: DELETE_CATEGORY,
        payload: {
            id
        }
    };
};

export function editCategory(id, categoryName) {
    return {
        type: EDIT_CATEGORY,
        payload: {
            id,
            categoryName
        }
    };
};
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export function addCategory(title, parentId) {
    return {
        type: ADD_CATEGORY,
        payload: {
            title,
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

export function editCategory(item) {
    return {
        type: EDIT_CATEGORY,
        payload: {
            item
        }
    };
};
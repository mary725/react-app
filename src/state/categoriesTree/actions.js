export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

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

export function editCategory(item) {
    return {
        type: EDIT_CATEGORY,
        payload: {
            item
        }
    };
};
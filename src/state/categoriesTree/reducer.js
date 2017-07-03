import _ from 'lodash';

import { deleteCategoryFromStructure } from './utils';
import {
    ADD_CATEGORY_ASYNC_SUCCESS,
    DELETE_CATEGORY_ASYNC_SUCCESS,
    EDIT_CATEGORY_ASYNC_SUCCESS,
    GET_CATEGORIES_ASYNC_SUCCESS
} from './actions';

export default function categoriesTree(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORIES_ASYNC_SUCCESS: {
            return action.payload.data;
        }
        case ADD_CATEGORY_ASYNC_SUCCESS: {
            let newState = { ...state };

            if (action.payload.parentId) {
                newState = {
                    ...state,
                    [action.payload.parentId]: {
                        ...state[action.payload.parentId],
                        childrenList: [...state[action.payload.parentId].childrenList || [], action.payload.itemId]
                    }
                };
            }
            newState[action.payload.itemId] = action.payload.item;
            return newState;
        }
        case EDIT_CATEGORY_ASYNC_SUCCESS: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    categoryName: action.payload.categoryName
                }
            };
        }
        case DELETE_CATEGORY_ASYNC_SUCCESS: {
            return deleteCategoryFromStructure(state, action.payload.id);
        }
        default:
            return state;
    }
};
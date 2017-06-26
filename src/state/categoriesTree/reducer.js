import _ from 'lodash';

import { deleteCategoryFromStructure } from './utils';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    GET_CATEGORIES_ASYNC_SUCCESS
} from './actions';

export default function categoriesTree(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORIES_ASYNC_SUCCESS: {
            return action.payload.data;
        }
        case ADD_CATEGORY: {
            const id = _.uniqueId();
            let newState = { ...state };

            if (action.payload.parentId) {
                newState = {
                    ...state,
                    parentId: {
                        ...state.parentId,
                        childrenList: [...state.parentId.childrenList, action.payload.item]
                    }
                };
            }
            newState[id] = action.payload.item;
            return newState;
        }
        case EDIT_CATEGORY: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    categoryName: action.payload.categoryName
                }
            };
        }
        case DELETE_CATEGORY: {
            return deleteCategoryFromStructure(state, action.payload.id);
        }
        default:
            return state;
    }
};
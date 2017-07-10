import {
    deleteCategoryFromStructure,
    addCategoryToStructure
} from './utils';
import {
    ADD_CATEGORY_ASYNC_SUCCESS,
    DELETE_CATEGORY_ASYNC_SUCCESS,
    EDIT_CATEGORY_ASYNC_SUCCESS,
    GET_CATEGORIES_ASYNC_SUCCESS,
    GET_CATEGORIES_ASYNC_REQUEST,
    ADD_CATEGORY_ASYNC_REQUEST,
    EDIT_CATEGORY_ASYNC_REQUEST,
    DELETE_CATEGORY_ASYNC_REQUEST
} from './actions';

const initialState = {
    data: {},
    isFetching: false
};

export default function categoriesTree(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_ASYNC_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
                isFetching: false
            };
        }
        case ADD_CATEGORY_ASYNC_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: addCategoryToStructure(state.data,
                        action.payload)
            };
        }
        case EDIT_CATEGORY_ASYNC_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: {
                    ...state.data,
                    [action.payload.id]: {
                        ...state.data[action.payload.id],
                        categoryName: action.payload.categoryName
                    }
                }
            };
        }
        case DELETE_CATEGORY_ASYNC_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: deleteCategoryFromStructure(state.data, action.payload.id)
            };
        }
        case GET_CATEGORIES_ASYNC_REQUEST:
        case ADD_CATEGORY_ASYNC_REQUEST:
        case EDIT_CATEGORY_ASYNC_REQUEST:
        case DELETE_CATEGORY_ASYNC_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }
        default:
            return state;
    }
};
import {
    GET_TODOS_ASYNC_SUCCESS,
    ADD_TODO_ASYNC_SUCCESS,
    EDIT_TODO_ASYNC_SUCCESS,
    DELETE_TODO_ASYNC_SUCCESS,
    MOVE_TODO_ASYNC_SUCCESS,
    DELETE_TODOS_BY_CATEGORY_ID,
    GET_TODOS_ASYNC_REQUEST,
    ADD_TODO_ASYNC_REQUEST,
    EDIT_TODO_ASYNC_REQUEST,
    DELETE_TODO_ASYNC_REQUEST,
    MOVE_TODO_ASYNC_REQUEST
} from './actions';
import {
    deleteTodo,
    editTodo,
    moveTodo
} from './utils';

const initialState = {
    data: {},
    isFetching: false
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS_ASYNC_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
                isFetching: false
            };
        }
        case ADD_TODO_ASYNC_SUCCESS: {
            const { categoryId, item } = action.payload;
            const data = { ...state.data };

            data[categoryId] = [ ...data[categoryId] || [],
                item];

            return {
                ...state,
                isFetching: false,
                data
            };
        }
        case EDIT_TODO_ASYNC_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: editTodo(state.data, action.payload)
            };
        }
        case DELETE_TODO_ASYNC_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: deleteTodo(state.data,
                    action.payload.categoryId,
                    action.payload.todoId)
            };
        }
        case DELETE_TODOS_BY_CATEGORY_ID: {
            let data = {...state.data};

            delete data[action.payload.id];

            return {
                ...state,
                isFetching: false,
                data
            };
        }
        case MOVE_TODO_ASYNC_SUCCESS: {
            const { oldCategoryId, newCategoryId, todoId } = action.payload;

            return {
                ...state,
                isFetching: false,
                data: moveTodo(state.data, oldCategoryId, newCategoryId, todoId)
            };
        }
        case MOVE_TODO_ASYNC_REQUEST:
        case GET_TODOS_ASYNC_REQUEST:
        case ADD_TODO_ASYNC_REQUEST:
        case EDIT_TODO_ASYNC_REQUEST:
        case DELETE_TODO_ASYNC_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }
        default:
            return state;
    }
};
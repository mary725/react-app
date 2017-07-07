import {
    GET_TODOS_ASYNC_SUCCESS,
    ADD_TODO_ASYNC_SUCCESS,
    EDIT_TODO_ASYNC_SUCCESS,
    DELETE_TODO_ASYNC_SUCCESS,
    DELETE_TODOS_BY_CATEGORY_ID
} from './actions';
import _ from 'lodash';

export default function todos(state = {}, action) {
    switch (action.type) {
        case GET_TODOS_ASYNC_SUCCESS: {
            return action.payload.data;
        }
        case ADD_TODO_ASYNC_SUCCESS: {
            const newState = { ...state };

            newState[action.payload.categoryId] = [ ...newState[action.payload.categoryId],
                                                    newState[action.payload.item.id] = action.payload.item];
            return newState;
        }
        case EDIT_TODO_ASYNC_SUCCESS: {
            let todos = {...state};
            let categoryTodos = [...todos[action.payload.categoryId]];
            let index = _.findIndex(categoryTodos, todo => todo.id === action.payload.item.id);

            categoryTodos[index] = {
                ...categoryTodos[index],
                ...action.payload.item
            };

            todos[action.payload.categoryId] = categoryTodos;

            return todos;
        }
        case DELETE_TODO_ASYNC_SUCCESS: {
            let todos = {...state};
            let categoryTodos = [...todos[action.payload.categoryId]];

            _.remove(categoryTodos, todo => todo.id === action.payload.todoId);
            todos[action.payload.categoryId] = categoryTodos;

            return todos;
        }
        case DELETE_TODOS_BY_CATEGORY_ID: {
            let todos = {...state};

            delete todos[action.payload.id];

            return todos;
        }
        default:
            return state;
    }
};
import {
    GET_TODOS_ASYNC_SUCCESS,
    EDIT_TODO_ASYNC_SUCCESS
} from './actions';
import _ from 'lodash';

export default function todos(state = {}, action) {
    switch (action.type) {
        case GET_TODOS_ASYNC_SUCCESS: {
            return action.payload.data;
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
        default:
            return state;
    }
};
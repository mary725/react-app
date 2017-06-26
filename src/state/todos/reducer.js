import {
    GET_TODOS_ASYNC_SUCCESS
} from './actions';

export default function todos(state = {}, action) {
    switch (action.type) {
        case GET_TODOS_ASYNC_SUCCESS: {
            return action.payload.data;
        }
        default:
            return state;
    }
};
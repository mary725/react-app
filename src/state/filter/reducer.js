import {
    CHANGE_FILTER_PARAMS
} from './actions';

export default function modal(state = {}, action) {
    switch (action.type) {
        case CHANGE_FILTER_PARAMS: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};
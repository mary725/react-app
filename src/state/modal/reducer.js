import {
    HIDE_MODAL,
    SHOW_CATEGORY_MODAL
} from './actions';

export default function modal(state = {}, action) {
    switch (action.type) {
        case HIDE_MODAL: {
            return {
                type: null,
                params: null
            };
        }
        case SHOW_CATEGORY_MODAL: {
            return {
                type: action.payload.type,
                params: action.payload.params,
            };
        }
        default:
            return state;
    }
};
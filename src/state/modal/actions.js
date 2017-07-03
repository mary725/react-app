import modalTypes from '../../constants/modal-types';

export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_CATEGORY_MODAL = 'SHOW_CATEGORY_MODAL';

export const hideModal = () => dispatch => {
    dispatch({
        type: HIDE_MODAL
    });
};

export const showCategoryModal = (params) => dispatch => {
    dispatch({
        type: SHOW_CATEGORY_MODAL,
        payload: {
            type: modalTypes.CATEGORY_MODAL,
            params: {
                ...params
            }
        }
    });
}
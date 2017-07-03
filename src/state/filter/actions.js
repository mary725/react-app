export const CHANGE_FILTER_PARAMS = 'CHANGE_FILTER_PARAMS';

export const changeFilterParams = (params) => dispatch => {
    dispatch({
        type: CHANGE_FILTER_PARAMS,
        payload: {
            ...params
        }
    });
}
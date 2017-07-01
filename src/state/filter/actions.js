export const CHANGE_FILTER_PARAMS = 'CHANGE_FILTER_PARAMS';

export function changeFilterParams(params) {
    return {
        type: CHANGE_FILTER_PARAMS,
        payload: {
            ...params
        }
    };
}
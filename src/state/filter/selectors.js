import { createSelector } from 'reselect';
import _ from 'lodash';

export const getFilterParams = createSelector(
    (state) => {
        return _.get(state, 'filter');
    },
    filterParams => filterParams
);


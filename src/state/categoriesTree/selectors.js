import { createSelector } from 'reselect';
import _ from 'lodash';

export const getCategoryById = createSelector(
    (state, id) => {
        return _.get(state, ['categoriesTree', _.toString(id)]);
    },
    category => category
);

export const getRootCategoryIds = createSelector(
    (state) => {
        let children = [];
        let rootCategoriesIds = [];

        _.forOwn(state.categoriesTree, value => {
            if (_.isArray(value.childrenList)) {
                children.push(...value.childrenList);
            }
        });

        _.forOwn(state.categoriesTree, (value, key) => {
            if (!_.includes(children, key)) {
                rootCategoriesIds.push(key);
            }
        });

        return rootCategoriesIds;
    },
    rootCategoryIds => rootCategoryIds
);

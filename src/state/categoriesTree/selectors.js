import { createSelector } from 'reselect';
import _ from 'lodash';

const getCategoryTree = state => _.get(state, 'categoriesTree.data');

export const getCategoryById = createSelector(
    [getCategoryTree, (state, id) => id],
    (categoriesTree, id) => {
        return _.get(categoriesTree, _.toString(id));
    }
);

export const getRootCategoryIds = createSelector(
    getCategoryTree,
    (categoriesTree) => {
        let children = [];
        let rootCategoriesIds = [];

        _.forOwn(categoriesTree, value => {
            if (_.isArray(value.childrenList)) {
                children.push(...value.childrenList);
            }
        });

        _.forOwn(categoriesTree, (value, key) => {
            if (!_.includes(children, _.toNumber(key))) {
                rootCategoriesIds.push(_.toNumber(key));
            }
        });

        return rootCategoriesIds;
    }
);

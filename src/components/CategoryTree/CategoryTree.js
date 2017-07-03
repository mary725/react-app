import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRootCategoryIds, getCategoryById } from '../../state/categoriesTree/selectors';
import CategoryTreeView from './components/CategoryTreeView';
import TodosTreeItem from './components/TodosTreeItem';
import TodoProfileTreeItem from './components/TodoProfileTreeItem';

function mapStateToProps(state) {
    return {
        ...state,
        rootCategoryIds: getRootCategoryIds(state)
    };
}

@connect(mapStateToProps)
class CategoryTree extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array,
        isProfileMode: PropTypes.bool
    };

    render() {
        const { isProfileMode } = this.props;
        const TreeItemComponent = isProfileMode
            ? TodoProfileTreeItem
            : TodosTreeItem;

        return (
            <CategoryTreeView
                getDataById={getCategoryById}
                itemComponent={TreeItemComponent}
                {...this.props}/>
        );
    }
}

export default CategoryTree;
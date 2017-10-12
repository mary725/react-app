import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRootCategoryIds, getCategoryById } from '../../state/categoriesTree/selectors';
import CategoryTreeView from './components/CategoryTreeView';
import TodosTreeItem from './components/TodosTreeItem';
import TodoProfileTreeItem from './components/TodoProfileTreeItem';
import { setExpandedCategoryState } from '../../state/categoriesTree';

function mapStateToProps(state) {
    return {
        ...state,
        rootCategoryIds: getRootCategoryIds(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setExpandedCategoryState
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class CategoryTree extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array,
        isProfileMode: PropTypes.bool,
        setExpandedCategoryState: PropTypes.func
    };

    static defaultProps = {
        isProfileMode: false
    };

    render() {
        const { isProfileMode, setExpandedCategoryState } = this.props;
        const TreeItemComponent = isProfileMode
            ? TodoProfileTreeItem
            : TodosTreeItem;

        return (
            <CategoryTreeView
                {...this.props}
                getDataById={getCategoryById}
                itemComponent={TreeItemComponent}
                setExpandedState={setExpandedCategoryState}/>
        );
    }
}

export default CategoryTree;
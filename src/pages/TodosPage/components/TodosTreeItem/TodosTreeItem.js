import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';

import { deleteCategory, editCategory, addCategory } from '../../../../state/categoriesTree';
import { showCategoryModal } from '../../../../state/modal';
import TodosTreeItemView from './components/TodosTreeItemView';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCategory,
        editCategory,
        addCategory,
        showCategoryModal
    }, dispatch);
}

@connect(null, mapDispatchToProps)
@autobind
class TodosTreeItem extends Component {
    static propTypes = {
        deleteCategory: PropTypes.func,
        editCategory: PropTypes.func,
        addCategory: PropTypes.func,
        showCategoryModal: PropTypes.func
    };

    onDeleteCategoryClick() {
        const { deleteCategory, id } = this.props;

        deleteCategory(id);
    }

    onEditCategoryClick() {
        const { showCategoryModal, editCategory, id } = this.props;

        showCategoryModal(value => { editCategory(id, value) });
    }

    onAddCategoryClick() {
        const { showCategoryModal, addCategory, id } = this.props;

        showCategoryModal(value => { addCategory(value, id) });
    }

    render() {
        return (
            <TodosTreeItemView
                {...this.props}
                onDeleteCategoryClick={this.onDeleteCategoryClick}
                onEditCategoryClick={this.onEditCategoryClick}
                onAddCategoryClick={this.onAddCategoryClick} />
        );
    }
}

export default TodosTreeItem;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';
import { withRouter } from 'react-router';
import _ from 'lodash';

import {
    deleteCategory,
    editCategory,
    addCategory
} from '../../../../state/categoriesTree/index';
import {
    showCategoryModal,
    showConfirmModal
} from '../../../../state/modal/index';
import TodosTreeItemView from './components/TodosTreeItemView';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCategory,
        editCategory,
        addCategory,
        showCategoryModal,
        showConfirmModal
    }, dispatch);
}

@withRouter
@injectIntl
@connect(null, mapDispatchToProps)
@autobind
class TodosTreeItem extends Component {
    static propTypes = {
        deleteCategory: PropTypes.func,
        editCategory: PropTypes.func,
        addCategory: PropTypes.func,
        showCategoryModal: PropTypes.func
    };

    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;

        this.hintOnAddCategory = formatMessage({ id: 'todosPage.tree.enterCategoryTitleHint' });
    }

    onDeleteCategoryClick() {
        const { showConfirmModal, deleteCategory, id } = this.props;

        showConfirmModal({
            onConfirm: () => deleteCategory(id),
            titleKey: 'common.modal.titleConfirmation'
        });
    }

    onEditCategoryClick() {
        const { showCategoryModal, editCategory, id, data: { categoryName } } = this.props;

        showCategoryModal({
            onSave: value => { editCategory(id, value) },
            value: categoryName,
            titleKey: 'todosPage.modal.titleEditCategory'
        });
    }

    onAddCategoryClick() {
        const { showCategoryModal, addCategory, id } = this.props;

        showCategoryModal({
            onSave: value => { addCategory(value, id) },
            hint: this.hintOnAddCategory,
            titleKey: 'todosPage.modal.titleNewCategory'
        });
    }

    render() {
        const { match: { params: { categoryId } }, id } = this.props;
        const isCurrentCategory = _.toNumber(categoryId) === _.toNumber(id);

        return (
            <TodosTreeItemView
                {...this.props}
                isCurrentCategory={isCurrentCategory}
                onDeleteCategoryClick={this.onDeleteCategoryClick}
                onEditCategoryClick={this.onEditCategoryClick}
                onAddCategoryClick={this.onAddCategoryClick} />
        );
    }
}

export default TodosTreeItem;
import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
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
        const { deleteCategory, id } = this.props;

        deleteCategory(id);
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';

import {
    showConfirmModal
} from '../../../../state/modal/index';
import { editTodo, deleteTodo } from '../../../../state/todos';
import TodoListView from './components/TodoListView';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editTodo,
        deleteTodo,
        showConfirmModal
    }, dispatch);
}

@injectIntl
@connect(null, mapDispatchToProps)
@autobind
class TodoList extends Component {
    static propTypes = {
        editTodo: PropTypes.func.isRequired,
        todos: PropTypes.array,
        showConfirmModal: PropTypes.func
    };

    onChangeStatus(id, isDone) {
        const { match: { params: { categoryId } }, editTodo } = this.props;

        editTodo({ id, isDone }, categoryId);
    }

    onEdit(id) {
        const { match: { params: { categoryId } }, history } = this.props;

        history.push(`/todoProfile/${categoryId}/${id}`);
    }

    onDelete(id) {
        const { showConfirmModal, match: { params: { categoryId } }, deleteTodo } = this.props;

        showConfirmModal({
            onConfirm: () => deleteTodo(id, categoryId),
            titleKey: 'common.modal.titleConfirmation'
        });
    }

    render() {
        const { todos } = this.props;

        return (
            <TodoListView
                list={todos}
                onChangeStatus={this.onChangeStatus}
                onEdit={this.onEdit}
                onDelete={this.onDelete}/>
        );
    }
}

export default TodoList;
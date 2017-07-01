import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';

import { editTodo } from '../../../../state/todos';
import TodoListView from './components/TodoListView';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editTodo
    }, dispatch);
}

@injectIntl
@connect(null, mapDispatchToProps)
@autobind
class TodoList extends Component {
    static propTypes = {
        editTodo: PropTypes.func.isRequired,
        todos: PropTypes.array
    };

    onChangeStatus(id, isDone) {
        const { match: { params: { categoryId } }, editTodo } = this.props;

        editTodo({ id, isDone }, categoryId);
    }

    onEdit(id) {
        const { match: { params: { categoryId } }, history } = this.props;

        history.push(`/todoProfile/${categoryId}/${id}`);
    }

    render() {
        const { todos } = this.props;

        return (
            <TodoListView
                list={todos}
                onChangeStatus={this.onChangeStatus}
                onEdit={this.onEdit}/>
        );
    }
}

export default TodoList;
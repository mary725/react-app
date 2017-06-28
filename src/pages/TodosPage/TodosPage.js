import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from './components/TodoList';
import { todosActions } from '../../state/todos';
import { getTodosByCategoryId } from '../../state/todos/selectors';

import './TodosPage.scss';

class TodosPage extends Component {
    static propTypes = {
        todos: PropTypes.object
    };

    render() {
        const { todos } = this.props;

        return (
            <div className="todos-page">
                <TodoList list={todos} />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state,
        todos: getTodosByCategoryId(state, props.match.params.categoryId)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        todosActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
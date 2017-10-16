import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { addTodo } from '../../state/todos';
import { addCategory } from '../../state/categoriesTree';
import { getTodosByCategoryId, getAllTodos } from '../../state/todos/selectors';
import TodosPageView from './components/TodosPageView';

function mapStateToProps(state, props) {
    const { match: { params: { categoryId } } } = props;

    return {
        ...state,
        todos: categoryId
                ? getTodosByCategoryId(state, categoryId)
                : getAllTodos(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addCategory,
        addTodo
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class TodosPage extends Component {
    static propTypes = {
        addCategory: PropTypes.func,
        addTodo: PropTypes.func,
        todos: PropTypes.array
    };

    onAddCategory(categoryName) {
        const { addCategory } = this.props;

        if (categoryName) {
            addCategory && addCategory(categoryName);
        }
    }

    onAddTodo(title) {
        const { addTodo, match: { params: { categoryId } } } = this.props;

        if (title) {
            addTodo && addTodo(title, _.toNumber(categoryId));
        }
    }

    render() {
        return (
            <TodosPageView
                {...this.props}
                onAddTodo={this.onAddTodo}
                onAddCategory={this.onAddCategory}/>
        );
    }
}

export default TodosPage;
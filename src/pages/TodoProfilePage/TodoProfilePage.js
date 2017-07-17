import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoProfilePageView from './components/TodoProfilePageView';
import { getTodoById } from '../../state/todos/selectors';

const mapStateToProps = (state, props) => {
    const { categoryId, todoId } = props.match.params;

    return {
        data: getTodoById(state, categoryId, todoId)
    };
};

@connect(mapStateToProps, null)
class TodoProfilePage extends Component {
    render() {
        return (
            <TodoProfilePageView
                {...this.props}/>
        );
    }
}

export default TodoProfilePage;
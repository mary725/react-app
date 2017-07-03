import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import TodoItem from './TodoItem';

import '../TodoList.scss';

@autobind
class TodoListView extends Component {
    static propTypes = {
        list: PropTypes.array,
        onChangeStatus: PropTypes.func,
        onEdit: PropTypes.func
    };

    static defaultProps = {
        list: []
    };

    render() {
        const { list, onChangeStatus, onEdit } = this.props;

        return (
            <div className="todo-list">
                {
                    list.map((item) => (
                        <TodoItem
                            item={item}
                            key={item.id && item.id.toString()}
                            onChangeStatus={onChangeStatus}
                            onEdit={onEdit}/>
                    ))
                }
            </div>
        );
    }
}

export default TodoListView;
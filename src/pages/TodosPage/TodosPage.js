import React, { Component } from 'react';

import TodoList from './components/TodoList';

import './TodosPage.scss';

const data = [
    {
        id: 1,
        title: 'Task 1',
        isDone: true,
        description: '11111111111111'
    },
    {
        id: 2,
        title: 'Task 2',
        isDone: false,
        description: '11111111111111'
    },
    {
        id: 3,
        title: 'Task 3',
        isDone: false,
        description: '11111111111111'
    }
];

class TodosPage extends Component {
    render() {
        return (
            <div className="todos-page">
                <TodoList list={data} />
            </div>
        );
    }
}

export default TodosPage;
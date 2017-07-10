import React, { Component } from 'react';

import TodoProfilePageView from './components/TodoProfilePageView';

class TodoProfilePage extends Component {
    render() {
        return (
            <TodoProfilePageView
                onSave={this.onEdit}
                {...this.props}/>
        );
    }
}

export default TodoProfilePage;
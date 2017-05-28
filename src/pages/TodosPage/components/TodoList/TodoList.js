import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';

import TodoItem from './components/TodoItem';

import './TodoList.scss';

@autobind
class TodoList extends Component {
   static propTypes = {
      list: PropTypes.array
   };

   render() {
      const { list } = this.props;

      return (
            <div className="todo-list">
                {
                    list.map((item) => (
                        <TodoItem item={item} key={item.id && item.id.toString()} />
                    ))
                }
            </div>
      );
   }
}

export default TodoList;
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import Checkbox from 'material-ui/Checkbox';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import _ from 'lodash';

import './TodoList.scss';

@autobind
class TodoList extends Component {
   constructor(props) {
      super(props);

      this.state = [];
   };

   render() {
      const { list } = this.state;

      return (
            <div className="todo-list">
                {
                    list.map((item, index) => (
                        <div key={item.id.toString()} className="item">
                            <div>
                                <Checkbox label="Show done" />
                                <span>{item.title}</span>
                            </div>
                            <EditorModeEdit />
                        </div>
                    ))
                }
            </div>
      );
   }
}

export default TodoList;
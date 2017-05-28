import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import Checkbox from 'material-ui/Checkbox';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import _ from 'lodash';

import './TodoItem.scss';

@autobind
class TodoItem extends Component {
   static propTypes = {
      item: PropTypes.object
   };

   render() {
      const { item } = this.props;

      return (
         <div className="todo-item">
             <div className='info'>
                 <Checkbox className='chb' />
                 <span className='title'>{item.title}</span>
             </div>
            <div>
             <EditorModeEdit className='icon' />
            </div>
         </div>
      );
   }
}

export default TodoItem;
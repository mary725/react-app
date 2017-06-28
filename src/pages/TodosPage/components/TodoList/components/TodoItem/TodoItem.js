import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import Checkbox from 'material-ui/Checkbox';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';

import './TodoItem.scss';

@autobind
class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.object,
        onChangeStatus: PropTypes.func
    };

    render() {
        const { item = {}, onChangeStatus } = this.props;

        return (
            <div className="todo-item">
                <div className='info'>
                    <Checkbox
                        className='chb'
                        checked={item.isDone}
                        onCheck={() => onChangeStatus && onChangeStatus(item.id)}/>
                    <span className='title'>{item.title}</span>
                </div>
                <div>
                    <EditorModeEdit className='icon'/>
                </div>
            </div>
        );
    }
}

export default TodoItem;
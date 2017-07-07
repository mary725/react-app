import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Checkbox from 'material-ui/Checkbox';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import ContentClear from 'react-material-icons/icons/content/clear';

import './TodoItem.scss';

@autobind
class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.object,
        onChangeStatus: PropTypes.func,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func
    };

    render() {
        const { item = {}, onChangeStatus, onEdit, onDelete } = this.props;

        return (
            <div className="todo-item">
                <div className='todo-item-info'>
                    <Checkbox
                        className='chb'
                        checked={item.isDone}
                        onCheck={(event, isChecked) => onChangeStatus && onChangeStatus(item.id, isChecked)}/>
                    <span className='title'>{item.title}</span>
                </div>
                <div className='todo-item-actions'>
                    <EditorModeEdit
                        className='icon'
                        onClick={() => onEdit && onEdit(item.id)}/>
                    <ContentClear
                        className="icon"
                        onClick={() => onDelete && onDelete(item.id)}/>
                </div>
            </div>
        );
    }
}

export default TodoItem;
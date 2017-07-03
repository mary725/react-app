import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Checkbox from 'material-ui/Checkbox';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';

import './TodoItem.scss';

@autobind
class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.object,
        onChangeStatus: PropTypes.func,
        onEdit: PropTypes.func
    };

    render() {
        const { item = {}, onChangeStatus, onEdit } = this.props;

        return (
            <div className="todo-item">
                <div className='info'>
                    <Checkbox
                        className='chb'
                        checked={item.isDone}
                        onCheck={(event, isChecked) => onChangeStatus && onChangeStatus(item.id, isChecked)}/>
                    <span className='title'>{item.title}</span>
                </div>
                <div>
                    <EditorModeEdit
                        className='icon'
                        onClick={() => onEdit && onEdit(item.id)}/>
                </div>
            </div>
        );
    }
}

export default TodoItem;
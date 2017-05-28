import React from 'react';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import ContentAddCircleOutline from 'react-material-icons/icons/content/add-circle-outline';
import ContentClear from 'react-material-icons/icons/content/clear';

import './TodosTreeItem.scss';

const TodosTreeItem = (props) => {
    const { categoryName } = props;

    return (
        <div className="todos-tree-item">
            <div className="todos-tree-item-name">
                <span>{categoryName}</span>
                <EditorModeEdit className="icon icon-edit" />
            </div>
            <div className="todos-tree-item-actions">
                <ContentClear className="icon" />
                <ContentAddCircleOutline className="icon" />
            </div>
        </div>
    );
}

export default TodosTreeItem;
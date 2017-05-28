import React from 'react';
import ContentReply from 'react-material-icons/icons/content/reply';

import './TodoProfileTreeItem.scss';

const TodoProfileTreeItem = (props) => {
    const { categoryName } = props;

    return (
        <div className="todo-profile-tree-item">
            <div className="todos-tree-item-name">
                <span>{categoryName}</span>
            </div>
            <div className="todos-tree-item-actions">
                <ContentReply className="icon"/>
            </div>
        </div>
    );
}

export default TodoProfileTreeItem;
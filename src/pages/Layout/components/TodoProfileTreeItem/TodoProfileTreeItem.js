import React, { PropTypes } from 'react';
import ContentReply from 'react-material-icons/icons/content/reply';

import './TodoProfileTreeItem.scss';

const TodoProfileTreeItem = (props) => {
    const { data: { categoryName } } = props;

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
};

TodoProfileTreeItem.propTypes = {
    data: PropTypes.shape({
        categoryName: PropTypes.string
    })
};

export default TodoProfileTreeItem;
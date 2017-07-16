import React from 'react';
import PropTypes from 'prop-types';
import ContentReply from 'react-material-icons/icons/content/reply';

import '../TodoProfileTreeItem.scss';

const TodoProfileTreeItemView = (props) => {
    const { data: { categoryName }, onMoveTodo, onLinkClick } = props;

    return (
        <div className="todo-profile-tree-item">
            <div className="todos-tree-item-name">
                <a onClick={onLinkClick}>{categoryName}</a>
            </div>
            <div className="todos-tree-item-actions">
                <ContentReply
                    className="icon"
                    onClick={onMoveTodo}/>
            </div>
        </div>
    );
};

TodoProfileTreeItemView.propTypes = {
    data: PropTypes.shape({
        categoryName: PropTypes.string
    }),
    onMoveTodo: PropTypes.func,
    onLinkClick: PropTypes.func
};

export default TodoProfileTreeItemView;
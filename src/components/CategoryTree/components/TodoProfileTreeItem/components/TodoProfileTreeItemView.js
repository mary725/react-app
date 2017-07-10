import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContentReply from 'react-material-icons/icons/content/reply';

import '../TodoProfileTreeItem.scss';

const TodoProfileTreeItemView = (props) => {
    const { data: { categoryName }, id, onMoveTodo } = props;

    return (
        <div className="todo-profile-tree-item">
            <div className="todos-tree-item-name">
                <Link to={`/todos/${id}`}>{categoryName}</Link>
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
    onMoveTodo: PropTypes.func
};

export default TodoProfileTreeItemView;
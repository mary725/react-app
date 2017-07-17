import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import ContentReply from 'react-material-icons/icons/content/reply';
import cn from 'classnames';

import '../TodoProfileTreeItem.scss';

const TodoProfileTreeItemView = (props) => {
    const { data: { categoryName }, isCurrentCategory, onMoveTodo, onLinkClick } = props;
    const linkClassName = cn({ 'current-category': isCurrentCategory });

    return (
        <div className="todo-profile-tree-item">
            <div className="todos-tree-item-name">
                <a onClick={onLinkClick} className={linkClassName}>{categoryName}</a>
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
    onLinkClick: PropTypes.func,
    isCurrentCategory: PropTypes.bool
};

export default pure(TodoProfileTreeItemView);
import React from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import ContentAddCircleOutline from 'react-material-icons/icons/content/add-circle-outline';
import ContentClear from 'react-material-icons/icons/content/clear';
import cn from 'classnames';

import '../TodosTreeItem.scss';

const TodosTreeItem = (props) => {
    const { data: { categoryName }, id, isCurrentCategory, onDeleteCategoryClick, onEditCategoryClick, onAddCategoryClick } = props;
    const linkClassName = cn({ 'current-category': isCurrentCategory });

    return (
        <div className="todos-tree-item">
            <div className="todos-tree-item-name">
                <Link to={`/todos/${id}`} className={linkClassName}>{categoryName}</Link>
                <EditorModeEdit
                    className="icon icon-edit"
                    onClick={onEditCategoryClick}/>
            </div>
            <div className="todos-tree-item-actions">
                <ContentClear
                    className="icon"
                    onClick={onDeleteCategoryClick}/>
                <ContentAddCircleOutline
                    className="icon"
                    onClick={onAddCategoryClick}/>
            </div>
        </div>
    );
};

TodosTreeItem.propTypes = {
    data: PropTypes.shape({
         categoryName: PropTypes.string
    }),
    id: PropTypes.number,
    onDeleteCategoryClick: PropTypes.func,
    onEditCategoryClick: PropTypes.func,
    onAddCategoryClick: PropTypes.func,
    isCurrentCategory: PropTypes.bool
};

TodosTreeItem.defaultProps = {
    data: {}
};

export default pure(TodosTreeItem);
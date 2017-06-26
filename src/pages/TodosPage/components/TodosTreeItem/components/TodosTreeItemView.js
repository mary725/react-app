import React, { PropTypes } from 'react';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import ContentAddCircleOutline from 'react-material-icons/icons/content/add-circle-outline';
import ContentClear from 'react-material-icons/icons/content/clear';

import '../TodosTreeItem.scss';

const TodosTreeItem = (props) => {
    const { data: { categoryName }, onDeleteCategoryClick, onEditCategoryClick, onAddCategoryClick } = props;

    return (
        <div className="todos-tree-item">
            <div className="todos-tree-item-name">
                <span>{categoryName}</span>
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
    onDeleteCategoryClick: PropTypes.func,
    onEditCategoryClick: PropTypes.func,
    onAddCategoryClick: PropTypes.func
};

TodosTreeItem.defaultProps = {
    data: {}
};

export default TodosTreeItem;
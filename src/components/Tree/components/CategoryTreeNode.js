import { PropTypes } from 'react';
import { connect } from 'react-redux';

import TreeNode from '../../TreeNode/index';
import { getCategoryById } from '../../../state/categoriesTree/selectors';

const mapStateToProps = (state, props) => {
    console.log(props.id);
    return {
        ...state,
        data: getCategoryById(state, props.id)
    };
};

const CategoryTreeNode = connect(mapStateToProps)(TreeNode);

CategoryTreeNode.propTypes = {
    id: PropTypes.number,
    data: PropTypes.object,
    itemComponent: PropTypes.func
};

export default CategoryTreeNode;


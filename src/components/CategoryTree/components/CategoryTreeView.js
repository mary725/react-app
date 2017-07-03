import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import TreeNode from '../../TreeNode';

import '../CategoryTree.scss';

@autobind
class CategoryTreeView extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array,
        itemComponent: PropTypes.func,
        getDataById: PropTypes.func
    };

    static defaultProps = {
        rootCategoryIds: []
    };

    render() {
        const { rootCategoryIds, itemComponent, getDataById } = this.props;

        return (
            <div className='category-tree'>
                { rootCategoryIds.map((id) => (
                    <TreeNode
                        key={id.toString()}
                        id={id}
                        itemComponent={itemComponent}
                        getDataById={getDataById}/>
                    )) }
            </div>
        );
    }
}

export default CategoryTreeView;
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';

import CategoryTreeNode from './CategoryTreeNode';

import '../Tree.scss';

@autobind
class TreeView extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array,
        itemComponent: PropTypes.func
    };

    static defaultProps = {
        rootCategoryIds: []
    };

    render() {
        const { rootCategoryIds, itemComponent } = this.props;

        return (
            <div className='tree'>
                { rootCategoryIds.map((id) => (
                    <CategoryTreeNode
                        key={id.toString()}
                        id={id}
                        itemComponent={itemComponent} />
                    )) }
            </div>
        );
    }
}

export default TreeView;
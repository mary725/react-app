import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { mapProps } from 'recompose';
import _ from 'lodash';

import TreeNode from './components/TreeNode';

import './Tree.scss';

@mapProps(props => {
    const { data = [] } = props;

    return {
        ...props,
        data: _.isArray(data)
            ? data
            : [data]
    };
})
@autobind
class Tree extends Component {
    static propTypes = {
        data: PropTypes.array,
        itemComponent: PropTypes.func
    };

    render() {
        const { data, itemComponent } = this.props;

        return (
            <div className='tree'>
                { data.map((item) => (
                    <TreeNode
                        key={item.id.toString()}
                        data={item}
                        itemComponent={itemComponent} />
                    )) }
            </div>
        );
    }
}

export default Tree;
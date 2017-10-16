import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import TreeNodeView from './components/TreeNodeView';

const mapStateToProps = (state, props) => {
    const { id, getDataById } = props;

    return {
        ...state,
        data: getDataById(state, id)
    };
};

@connect(mapStateToProps)
@autobind
class TreeNode extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        data: PropTypes.shape({
            isExpanded: PropTypes.bool
        }),
        itemComponent: PropTypes.func,
        getDataById: PropTypes.func.isRequired,
        setExpandedState: PropTypes.func.isRequired
    };

    onExpand() {
        const { setExpandedState, id, data: { isExpanded } } = this.props;

        setExpandedState(id, !isExpanded);
    }

    render() {
        const { getDataById, data } = this.props;

        return (
            <TreeNodeView
                {...this.props}
                isExpanded={data && data.isExpanded}
                onExpand={this.onExpand}
                getDataById={getDataById}/>
        );
    }
}

export default TreeNode;


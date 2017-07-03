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
        id: PropTypes.string,
        data: PropTypes.object,
        itemComponent: PropTypes.func,
        getDataById: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    onExpand() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        const { getDataById } = this.props;
        const { isExpanded = false } = this.state;

        return (
            <TreeNodeView
                isExpanded={isExpanded}
                onExpand={this.onExpand}
                getDataById={getDataById}
                {...this.props}/>
        );
    }
}

export default TreeNode;


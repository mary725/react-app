import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getRootCategoryIds } from '../../state/categoriesTree/selectors';
import TreeView from './components/TreeView';

function mapStateToProps(state) {
    return {
        ...state,
        rootCategoryIds: getRootCategoryIds(state)
    };
}

@connect(mapStateToProps)
class Tree extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array
    };

    render() {
        return (
            <TreeView {...this.props}/>
        );
    }
}

export default Tree;
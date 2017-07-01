import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFilterParams } from '../../state/filter/selectors';
import { changeFilterParams } from '../../state/filter/actions';
import FilterView from './components/FilterView';

function mapStateToProps(state) {
    return {
        ...state,
        params: getFilterParams(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFilterParams
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Tree extends Component {
    static propTypes = {
        params: PropTypes.object
    };

    render() {
        return (
            <FilterView {...this.props}/>
        );
    }
}

export default Tree;
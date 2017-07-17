import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return {
        isFetching: !!(_.get(state, 'categoriesTree.isFetching') ||
                        _.get(state, 'todos.isFetching'))
    };
};

@connect(mapStateToProps)
class CustomLoader extends Component {
    static propTypes = {
        isFetching: PropTypes.bool
    };

    render() {
        const { isFetching } = this.props;

        return (
            <Loader loaded={!isFetching} />
        );
    }
}

export default pure(CustomLoader);


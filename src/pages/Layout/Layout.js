import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LayoutView from './components/LayoutView';
import { getCategories } from '../../state/categoriesTree';
import { getTodos } from '../../state/todos';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCategories,
        getTodos
    }, dispatch);
}

@connect(null, mapDispatchToProps)
class Layout extends Component {
    static propTypes = {
        getTodos: PropTypes.func,
        getCategories: PropTypes.func
    };

    componentDidMount() {
        const { getCategories, getTodos } = this.props;

        getCategories && getCategories();
        getTodos && getTodos();
    }

    render() {
        return (
            <LayoutView {...this.props}/>
        );
    }
}

export default Layout;
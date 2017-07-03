import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LayoutView from './components/LayoutView';
import { getCategories, addCategory } from '../../state/categoriesTree';
import { getTodos, addTodo } from '../../state/todos';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCategories,
        addCategory,
        getTodos,
        addTodo
    }, dispatch);
}

@connect(null, mapDispatchToProps)
class Layout extends Component {
    static propTypes = {
        getTodos: PropTypes.func,
        addTodo: PropTypes.func,
        getCategories: PropTypes.func,
        addCategory: PropTypes.func,
        rootCategoryIds: PropTypes.array
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
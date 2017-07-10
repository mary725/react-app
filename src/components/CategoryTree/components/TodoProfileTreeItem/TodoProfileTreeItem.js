import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';

import {
    moveTodoToOtherCategory
} from '../../../../state/todos';
import {
    showConfirmModal
} from '../../../../state/modal/index';
import TodoProfileTreeItemView from './components/TodoProfileTreeItemView';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        moveTodoToOtherCategory,
        showConfirmModal
    }, dispatch);
}

@injectIntl
@connect(null, mapDispatchToProps)
@autobind
class TodoProfileTreeItem extends Component {
    static propTypes = {
        moveTodoToOtherCategory: PropTypes.func,
        showConfirmModal: PropTypes.func
    };

    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;
    }

    moveTodoToOtherCategory() {
        const { moveTodoToOtherCategory, id } = this.props;

        moveTodoToOtherCategory(null, null, id);
    }

    render() {
        return (
            <TodoProfileTreeItemView
                {...this.props}
                onMoveTodo={this.moveTodoToOtherCategory}/>
        );
    }
}

export default TodoProfileTreeItem;
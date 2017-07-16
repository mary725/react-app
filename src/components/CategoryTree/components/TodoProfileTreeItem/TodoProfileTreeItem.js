import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';
import _ from 'lodash';

import { isFormPristine } from './selectors';
import {
    moveTodoToOtherCategory
} from '../../../../state/todos';
import {
    showConfirmModal
} from '../../../../state/modal/index';
import TodoProfileTreeItemView from './components/TodoProfileTreeItemView';

const mapStateToProps = (state) => ({
    isFormPristine: isFormPristine(state)
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        moveTodoToOtherCategory,
        showConfirmModal
    }, dispatch);
}

@withRouter
@injectIntl
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class TodoProfileTreeItem extends Component {
    static propTypes = {
        moveTodoToOtherCategory: PropTypes.func,
        showConfirmModal: PropTypes.func,
        isFormPristine: PropTypes.bool,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;

        this.confirmMessage = formatMessage({ id: 'todoProfile.confirmMessage.moveTodo' });
    }

    onLinkClick() {
        const { history: { push }, id } = this.props;

        this.onChange(() => push(`/todos/${id}`));
    }

    moveTodoToOtherCategory() {
        const { moveTodoToOtherCategory, id, match: { params: { categoryId, todoId } } } = this.props;

        this.onChange(() => moveTodoToOtherCategory(_.toNumber(categoryId), _.toNumber(todoId), id));
    }

    onChange(action) {
        const { showConfirmModal, isFormPristine } = this.props;

        if (isFormPristine) {
            action();
        } else {
            showConfirmModal({
                onConfirm: action,
                message: this.confirmMessage,
                titleKey: 'common.modal.titleConfirmation'
            });
        }
    }

    render() {
        return (
            <TodoProfileTreeItemView
                {...this.props}
                onMoveTodo={this.moveTodoToOtherCategory}
                onLinkClick={this.onLinkClick}/>
        );
    }
}

export default TodoProfileTreeItem;
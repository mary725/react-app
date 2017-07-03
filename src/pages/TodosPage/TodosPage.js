import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from './components/TodoList';
import { todosActions } from '../../state/todos';
import { getTodosByCategoryId } from '../../state/todos/selectors';

import './TodosPage.scss';

@injectIntl
class TodosPage extends Component {
    static propTypes = {
        todos: PropTypes.array,
        intl: intlShape
    };

    static defaultProps = {
        todos: []
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.noDataMessage = formatMessage({ id: 'todosPage.todos.noDataMessage' });
    }

    render() {
        const { todos } = this.props;

        return (
            <div className="todos-page">
                { todos.length
                    ? (<TodoList
                        {...this.props}/>)
                    : (<div>
                        {this.noDataMessage}
                        </div>)}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state,
        todos: getTodosByCategoryId(state, props.match.params.categoryId)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        todosActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
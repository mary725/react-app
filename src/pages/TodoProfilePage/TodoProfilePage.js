import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { reduxForm, initialize, getFormValues, reset } from 'redux-form';

import { getTodoById } from '../../state/todos/selectors';
import { editTodo } from '../../state/todos';
import TodoProfilePageView from './components/TodoProfilePageView';

const todoProfileFormName = 'todoProfileFormName';

const mapStateToProps = (state, props) => {
    return {
        data: getTodoById(state,
                            props.match.params.categoryId,
                            props.match.params.todoId),
        formValues: getFormValues(todoProfileFormName)(state)
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editTodo,
        initialize: (initialValues) => {
            dispatch(initialize(todoProfileFormName, initialValues));
        },
        reset
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({
    form: todoProfileFormName
})
@autobind
class TodoProfilePage extends Component {
    static propTypes = {
        data: PropTypes.object,
        editTodo: PropTypes.func.isRequired,
        reset: PropTypes.func
    };

    componentDidMount() {
        this.props.initialize(this.getInitialValues());
    }

    getInitialValues() {
        const { data = {} } = this.props;

        return {
            title: data.title,
            isDone: data.isDone,
            description: data.description
        };
    }

    onEdit() {
        const { editTodo, match: { params: { categoryId, todoId } }, history, formValues } = this.props;
        const item = { ...formValues };

        item.id = todoId;
        editTodo(item, categoryId);

        history.push(`/todos/${categoryId}`);
    }

    render() {
        const { reset } = this.props;

        return (
            <TodoProfilePageView
                reset={reset}
                onSave={this.onEdit}
                {...this.props}/>
        );
    }
}

export default TodoProfilePage;
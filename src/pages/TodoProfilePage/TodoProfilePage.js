import React, { Component, PropTypes } from 'react';
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
        editTodo: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.initialize(this.getInitialValues());
    }

    getInitialValues() {
        const view = {};

        return view;
    }

    onEdit() {
        const { editTodo, match: { params: { categoryId, todoId } } } = this.props;

        editTodo(categoryId, todoId);
    }

    render() {
        return (
            <TodoProfilePageView
                onSave={this.onEdit}
                {...this.props}/>
        );
    }
}

export default TodoProfilePage;
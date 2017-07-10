import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { reduxForm, initialize, getFormValues, reset, change } from 'redux-form';

import { getTodoById } from '../../../../state/todos/selectors';
import { editTodo } from '../../../../state/todos';
import ProfileView from './components/ProfileView';

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
        changeFieldValue: (field, value) => {
            dispatch(change(todoProfileFormName, field, value));
        },
        reset: () => {
            dispatch(reset(todoProfileFormName));
        }
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({
    form: todoProfileFormName,
    initialValues: {
        description: '33333333333333'
    }
})
@autobind
class Profile extends Component {
    static propTypes = {
        data: PropTypes.object,
        editTodo: PropTypes.func.isRequired,
        reset: PropTypes.func,
        changeFieldValue: PropTypes.func
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
        return (
            <ProfileView
                onSave={this.onEdit}
                {...this.props}/>
        );
    }
}

export default Profile;
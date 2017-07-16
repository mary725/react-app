import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { reduxForm, initialize, getFormValues, reset } from 'redux-form';
import _ from 'lodash';

import { getTodoById } from '../../../../state/todos/selectors';
import { editTodo } from '../../../../state/todos';
import ProfileView from './components/ProfileView';
import formNames from '../../../../constants/form-names';

const mapStateToProps = (state, props) => {
    return {
        data: getTodoById(state,
                            props.match.params.categoryId,
                            props.match.params.todoId),
        formValues: getFormValues(formNames.todoProfileFormName)(state)
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editTodo,
        initialize: (initialValues) => {
            dispatch(initialize(formNames.todoProfileFormName, initialValues));
        },
        reset: () => {
            dispatch(reset(formNames.todoProfileFormName));
        }
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({
    form: formNames.todoProfileFormName
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

    getInitialValues(newData = {}) {
        const { data = newData } = this.props;

        return {
            title: data.title,
            isDone: data.isDone,
            description: data.description
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data !== this.props.data) {
            this.props.initialize(this.getInitialValues(newProps.data));
        }
    }

    onEdit() {
        const { editTodo, match: { params: { categoryId, todoId } }, history, formValues } = this.props;
        const item = { ...formValues };

        item.id = _.toNumber(todoId);
        editTodo(item, categoryId);

        history.push(`/todos/${categoryId}`);
    }

    render() {
        return (
            <ProfileView
                {...this.props}
                onSave={this.onEdit}/>
        );
    }
}

export default Profile;
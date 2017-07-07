import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import FormCheckBox from '../../../components/form/FormCheckBox';
import FormInput from '../../../components/form/FormInput';
import FormTextarea from '../../../components/form/FormTextarea';

import '../TodoProfilePage.scss';

@injectIntl
class TodoProfilePageView extends Component {
    static propTypes = {
        data: PropTypes.object,
        onSave: PropTypes.func
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.btnSaveChanges = formatMessage({ id: 'common.button.saveChanges' });
        this.btnCancel = formatMessage({ id: 'common.button.cancel' });
        this.titleHint = formatMessage({ id: 'todoProfile.titleHint' });
        this.showDoneMessage = formatMessage({ id: 'todoProfile.showDone' });
        this.descriptionHint = formatMessage({ id: 'todoProfile.descriptionHint' });
    }

    render() {
        const { onSave } = this.props;

        return (
            <form className="todo-profile-page">
                <div className='profile-action-panel'>
                    <RaisedButton
                        className='btn'
                        label={this.btnSaveChanges}
                        primary
                        onClick={onSave}/>
                    <RaisedButton
                        className='btn'
                        label={this.btnCancel} />
                </div>
                <Field
                    name='title'
                    hint={this.titleHint}
                    className='title'
                    component={FormInput}/>
                <Field
                    name='isDone'
                    label={this.showDoneMessage}
                    className='chb-done'
                    component={FormCheckBox}/>
                <Field
                    name='description'
                    placeholder={this.descriptionHint}
                    className='description'
                    component={FormTextarea}/>
            </form>
        );
    }
}

export default TodoProfilePageView;
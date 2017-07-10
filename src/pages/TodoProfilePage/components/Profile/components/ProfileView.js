import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import FormCheckBox from '../../../../../components/form/FormCheckBox';
import FormInput from '../../../../../components/form/FormInput';
import FormTextarea from '../../../../../components/form/FormTextarea';
import AddUser from './AppUser';

import '../Profile.scss';

@injectIntl
class ProfileView extends Component {
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
        const { onSave, changeFieldValue } = this.props;

        return (
            <div className="profile">
                <AddUser
                    onSubmit={()=>{}}
                    initialValues={{
                        name: 'Test',
                        email: 'test@test.com',
                    }} />
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
                    type='text'
                    component={FormInput}/>
                <Field
                    name='isDone'
                    label={this.showDoneMessage}
                    className='chb-done'
                    type='checkbox'
                    component={FormCheckBox}/>
                <Field
                    name='description'
                    placeholder={this.descriptionHint}
                    className='description'
                    component={FormTextarea}/>
            </div>
        );
    }
}

export default ProfileView;

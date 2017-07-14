import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {
    TextField,
    Checkbox
} from 'redux-form-material-ui';

import * as validators from '../../../../../utils/validators';

import '../Profile.scss';

@injectIntl
class ProfileView extends Component {
    static propTypes = {
        data: PropTypes.object,
        onSave: PropTypes.func,
        reset: PropTypes.func
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
        const { onSave, reset, intl: { formatMessage }, handleSubmit } = this.props;

        return (
            <form className="profile" onSubmit={handleSubmit(onSave)}>
                <div className='profile-action-panel'>
                    <RaisedButton
                        className='btn'
                        label={this.btnSaveChanges}
                        primary
                        type='submit'/>
                    <RaisedButton
                        className='btn'
                        label={this.btnCancel}
                        onClick={reset}/>
                </div>
                <Field
                    name='title'
                    hintText={this.titleHint}
                    className='title'
                    component={TextField}
                    validate={value => validators.required(value, formatMessage)}/>
                <Field
                    name='isDone'
                    label={this.showDoneMessage}
                    className='chb-done'
                    type='checkbox'
                    component={Checkbox}/>
                <Field
                    name='description'
                    hintText={this.descriptionHint}
                    fullWidth
                    className='description'
                    multiLine
                    rows={15}
                    component={TextField}/>
            </form>
        );
    }
}

export default ProfileView;

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import './TodoProfilePage.scss';

@injectIntl
class TodoProfilePage extends Component {
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
        return (
            <div className="todo-profile-page">
                <div className='action-panel'>
                    <RaisedButton
                        className='btn'
                        label={this.btnSaveChanges}
                        primary />
                    <RaisedButton
                        className='btn'
                        label={this.btnCancel} />
                </div>
                <TextField
                    className="title"
                    hintText={this.titleHint}/>
                <Checkbox
                    label={this.showDoneMessage}
                    className='chb-done' />
                <textarea
                    className='description'
                    placeholder={this.descriptionHint}></textarea>
            </div>
        );
    }
}

export default TodoProfilePage;
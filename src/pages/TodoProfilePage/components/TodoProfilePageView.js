import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

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
        const { data = {}, onSave } = this.props;

        return (
            <div className="todo-profile-page">
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
                <TextField
                    className="title"
                    hintText={this.titleHint}/>
                <Checkbox
                    checked={!!data.isDone}
                    label={this.showDoneMessage}
                    className='chb-done' />
                <textarea
                    className='description'
                    placeholder={this.descriptionHint}></textarea>
            </div>
        );
    }
}

export default TodoProfilePageView;
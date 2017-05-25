import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './InputWithButton.scss';

const InputWithButton = ({ btnLabel }) => {
    return (
        <div className="input-with-button">
            <TextField className="text-field"/>
            <RaisedButton
                label={btnLabel}
                primary={true} />
        </div>
    );
}

export default InputWithButton;
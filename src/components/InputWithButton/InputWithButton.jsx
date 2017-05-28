import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './InputWithButton.scss';

const InputWithButton = ({ btnLabel, hint }) => {
    return (
        <div className="input-with-button">
            <TextField
                className="text-field"
                hintText={hint}/>
            <RaisedButton
                label={btnLabel}
                primary />
        </div>
    );
}

InputWithButton.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    hint: PropTypes.string
};

export default InputWithButton;
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Modal.scss';

@autobind
class Modal extends Component {
    static propTypes = {
        btnLabel: PropTypes.string.isRequired,
        hint: PropTypes.string,
        onHandleBtnClick: PropTypes.func.isRequired
    };

    onBtnClick() {
        const { onHandleBtnClick } = this.props;
        onHandleBtnClick(this.textField.input.value);
        this.textField.input.value = null; // todo
    }

    render = () => {
        const { btnLabel, hint } = this.props;

        return (
            <div className="input-with-button">
                <TextField
                    className="text-field"
                    hintText={hint}
                    ref={(textField) => this.textField = textField }/>
                <RaisedButton
                    label={btnLabel}
                    primary
                    onClick={this.onBtnClick}/>
            </div>
        );
    };
}

export default Modal;
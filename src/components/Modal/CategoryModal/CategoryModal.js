import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './CategoryModal.scss';

@autobind
class CategoryModal extends Component {
    static propTypes = {
        btnLabel: PropTypes.string.isRequired,
        hint: PropTypes.string,
        onSave: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired
    };

    onBtnClick() {
        const { onSave, hideModal } = this.props;

        onSave(this.textField.input.value);
        hideModal();
    }

    render = () => {
        const { btnLabel, hint } = this.props;

        return (
            <div className="category-modal">
                <TextField
                    id="category-name"
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

export default CategoryModal;
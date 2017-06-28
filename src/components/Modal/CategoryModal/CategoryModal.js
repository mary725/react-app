import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import autobind from 'autobind-decorator';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './CategoryModal.scss';

@injectIntl
@autobind
class CategoryModal extends Component {
    static propTypes = {
        btnPrimaryLabel: PropTypes.string,
        btnSecondaryLabel: PropTypes.string,
        hint: PropTypes.string,
        onSave: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
        value: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;

        this.btnSaveDefaultLabel = formatMessage({ id: 'common.button.save' });
        this.btnCancelDefaultLabel = formatMessage({ id: 'common.button.cancel' });
    }

    onBtnClick() {
        const { onSave, hideModal } = this.props;

        onSave(this.textField.input.value);
        hideModal();
    }

    render = () => {
        const { btnPrimaryLabel, btnSecondaryLabel, hint, value, hideModal } = this.props;

        return (
            <div className="category-modal">
                <TextField
                    id="category-name"
                    className="text-field"
                    hintText={hint}
                    ref={(textField) => {
                        this.textField = textField;
                        if (this.textField && value) {
                            this.textField.input.value = value;
                        }
                    } }/>
                <div className='actions'>
                    <RaisedButton
                        label={btnPrimaryLabel || this.btnSaveDefaultLabel}
                        primary
                        className='btn'
                        onClick={this.onBtnClick}/>
                    <RaisedButton
                        label={btnSecondaryLabel || this.btnCancelDefaultLabel}
                        className='btn'
                        onClick={hideModal}/>
                </div>
            </div>
        );
    };
}

export default CategoryModal;
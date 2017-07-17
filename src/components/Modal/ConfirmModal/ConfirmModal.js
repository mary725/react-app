import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { injectIntl } from 'react-intl';
import autobind from 'autobind-decorator';
import RaisedButton from 'material-ui/RaisedButton';

import './ConfirmModal.scss';

@injectIntl
@autobind
class ConfirmModal extends Component {
    static propTypes = {
        btnPrimaryLabel: PropTypes.string,
        btnSecondaryLabel: PropTypes.string,
        message: PropTypes.string,
        onConfirm: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;

        this.confirmMessage = formatMessage({ id: 'common.confirmMessage' });
        this.btnOKDefaultLabel = formatMessage({ id: 'common.button.ok' });
        this.btnCancelDefaultLabel = formatMessage({ id: 'common.button.cancel' });
    }

    onBtnClick() {
        const { onConfirm, hideModal } = this.props;

        onConfirm();
        hideModal();
    }

    render = () => {
        const { btnPrimaryLabel, btnSecondaryLabel, hideModal, message } = this.props;

        return (
            <div className="confirm-modal">
                <div className="message">
                    { message || this.confirmMessage }
                </div>
                <div className='actions'>
                    <RaisedButton
                        label={btnPrimaryLabel || this.btnOKDefaultLabel}
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

export default pure(ConfirmModal);
import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import Modal from 'react-modal';
import { getContext } from 'recompose';
import ContentClear from 'react-material-icons/icons/content/clear';

import { hideModal } from '../../state/modal';

import './RootModal.scss';

const mapStateToProps = (state) => {
    return { ...state.modal };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            hideModal
        }, dispatch);
};

@getContext({ modals: PropTypes.object })
@connect(mapStateToProps, mapDispatchToProps)
@injectIntl
@autobind
class RootModal extends Component {
    static propTypes = {
        type: PropTypes.string,
        modals: PropTypes.object,
        shouldCloseOnOverlayClick: PropTypes.bool,
        params: PropTypes.any,
        hideModal: PropTypes.func,
        intl: intlShape.isRequired
    };

    getModalTitle() {
        const { intl: { formatMessage }, params } = this.props;

        return params && params.titleKey && formatMessage({ id: params.titleKey });
    }

    render = () => {
        const { type, shouldCloseOnOverlayClick, params, modals, hideModal } = this.props;
        const SpecificModal = type ? modals[type] : null;
        const title = this.getModalTitle();

        return (
            <div className="root-modal">
                <Modal
                    contentLabel='modalContentLabel'
                    isOpen={!!SpecificModal}
                    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                    onRequestClose={hideModal}
                    className='modal'
                    overlayClassName='modal-overlay'>
                    <div className='modal-header'>
                        <h2 className='modal-header-left'>
                            {title}
                        </h2>
                        <ContentClear
                            className="icon"
                            onClick={hideModal}/>
                    </div>
                    { SpecificModal && <SpecificModal {...params} hideModal={hideModal}/> }
                </Modal>
            </div>
        );
    };
}

export default RootModal;
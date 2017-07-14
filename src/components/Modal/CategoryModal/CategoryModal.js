import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { reduxForm, initialize, getFormValues } from 'redux-form';

import CategoryModalView from './components/CategoryModalView';

import './CategoryModal.scss';

const categoryModalFormName = 'categoryModalFormName';

const mapStateToProps = (state) => {
    return {
        formValues: getFormValues(categoryModalFormName)(state)
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initialize: (initialValues) => {
            dispatch(initialize(categoryModalFormName, initialValues));
        }
    }, dispatch);
}

@injectIntl
@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({
    form: categoryModalFormName
})
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

    componentDidMount() {
        this.props.initialize(this.getInitialValues());
    }

    getInitialValues() {
        const { value } = this.props;

        return {
            title: value
        };
    }

    onSave() {
        const { onSave, hideModal, formValues } = this.props;

        onSave(formValues.title);
        hideModal();
    }

    render() {
        return (
            <CategoryModalView
                {...this.props}
                onSave={this.onSave}
                btnSaveDefaultLabel={this.btnSaveDefaultLabel}
                btnCancelDefaultLabel={this.btnCancelDefaultLabel}/>
        );
    };
}

export default CategoryModal;
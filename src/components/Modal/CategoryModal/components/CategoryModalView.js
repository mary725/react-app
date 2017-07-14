import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import autobind from 'autobind-decorator';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {
    TextField
} from 'redux-form-material-ui';

import * as validators from '../../../../utils/validators';

import '../CategoryModal.scss';

@injectIntl
@autobind
class CategoryModalView extends Component {
    static propTypes = {
        btnPrimaryLabel: PropTypes.string,
        btnSecondaryLabel: PropTypes.string,
        hint: PropTypes.string,
        onSave: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired
    };

    render() {
        const {
            btnPrimaryLabel,
            btnSecondaryLabel,
            hint,
            hideModal,
            btnSaveDefaultLabel,
            btnCancelDefaultLabel,
            onSave,
            handleSubmit,
            intl: { formatMessage }
        } = this.props;

        return (
            <form className="category-modal" onSubmit={handleSubmit(onSave)}>
                <Field
                    name='title'
                    hintText={hint}
                    className='text-field'
                    component={TextField}
                    validate={value => validators.required(value, formatMessage)}/>
                <div className='actions'>
                    <RaisedButton
                        label={btnPrimaryLabel || btnSaveDefaultLabel}
                        primary
                        type='submit'
                        className='btn'/>
                    <RaisedButton
                        label={btnSecondaryLabel || btnCancelDefaultLabel}
                        className='btn'
                        onClick={hideModal}/>
                </div>
            </form>
        );
    };
}

export default CategoryModalView;
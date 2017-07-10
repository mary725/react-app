import { Field, reduxForm } from 'redux-form';
import React from 'react';

import LabelledInput from './Input';

const AddUser = ({
                     reset,
                     handleSubmit,
                     pristine,
                     submitting,
                     errors,
                     invalid,
                     submitSucceeded,
                     submitFailed,
                 }) => (
    <form onSubmit={handleSubmit}>
        <Field name="name" label="Name:" component={LabelledInput} />
        <Field name="email" label="Email:" component={LabelledInput} normalize={(val) => val.toLowerCase()} />
        <button type="button" className="btn btn-default" onClick={reset} disabled={pristine || submitting}>Reset</button>
        {' '}
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting || invalid}>Add User</button>
    </form>
)

export default reduxForm({
    form: 'addUser', // required, unique name of form
})(AddUser);
import { createSelector } from 'reselect';
import _ from 'lodash';

import formNames from '../../../../constants/form-names';

const getFormState = state => _.get(state, `form.${formNames.todoProfileFormName}`, {});

export const isFormPristine = createSelector(
    getFormState,
    (formState) => _.isEqual(formState.initial, formState.values)
);

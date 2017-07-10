import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const FormCheckBox = (props) => {
    const { input: { checked }, className, label } = props;

    return (
        <Checkbox
            checked={checked}
            label={label}
            className={className} />
    );
};

FormCheckBox.propTypes = {
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    label: PropTypes.string
};

export default FormCheckBox;
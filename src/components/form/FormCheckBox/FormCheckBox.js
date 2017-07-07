import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const FormCheckBox = (props) => {
    const { input, className, label } = props;

    return (
        <Checkbox
            checked={input.value}
            label={label}
            className={className} />
    );
};

FormCheckBox.propTypes = {
    input: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string
};

export default FormCheckBox;
import React from 'react';
import PropTypes from 'prop-types';

const FormTextarea = (props) => {
    const { input, className, placeholder } = props;

    return (
        <textarea
            {...input}
            className={className}
            placeholder={placeholder}></textarea>
    );
};

FormTextarea.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default FormTextarea;
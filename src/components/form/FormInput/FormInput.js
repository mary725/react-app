import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import TextField from 'material-ui/TextField';

@autobind
class FormInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.input.value,
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        const { className, hint } = this.props;
        const { value } = this.state;

        return (
            <TextField
                value={value}
                className={className}
                hintText={hint}
                onChange={this.handleChange}/>
        );
    }
};

FormInput.propTypes = {
    hint: PropTypes.string,
    className: PropTypes.string
};

export default FormInput;
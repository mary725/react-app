import React from 'react';

const LabelledInput = (props) => {
    const { input, meta: { submitting }, label } = props;
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type="text" className="form-control" {...input} disabled={submitting} />
        </div>
    );
}

export default LabelledInput;
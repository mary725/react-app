import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const TodosProgressBarView = (props) => {
    return (
        <LinearProgress mode={props.mode} value={props.value} max={props.max} />
    );
};

TodosProgressBarView.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    mode: PropTypes.string
};

TodosProgressBarView.defaultProps = {
    mode: 'determinate'
};

export default TodosProgressBarView;
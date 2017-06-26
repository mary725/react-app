import { connect } from 'react-redux';

import TodosProgressBarView from './components/TodosProgressBarView';
import { getTodosCount, getDoneTodosCount } from '../../state/todos/selectors';

const mapStateToProps = (state) => {
    return {
        max: getTodosCount(state),
        value: getDoneTodosCount(state)
    };
};

export default connect(mapStateToProps)(TodosProgressBarView);


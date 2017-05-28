import { combineReducers } from 'redux';

import { categoriesTree } from './categoriesTree';
import { todos } from './todos';

export default combineReducers({
    categoriesTree,
    todos
});

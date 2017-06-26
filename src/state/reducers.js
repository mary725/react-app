import { combineReducers } from 'redux';

import { categoriesTree } from './categoriesTree';
import { todos } from './todos';
import { modal } from './modal';

export default combineReducers({
    categoriesTree,
    todos,
    modal
});

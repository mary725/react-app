import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { categoriesTree } from './categoriesTree';
import { todos } from './todos';
import { modal } from './modal';
import { filter } from './filter';

export default combineReducers({
    categoriesTree,
    todos,
    modal,
    filter,
    form: reduxFormReducer,
    router: routerReducer
});

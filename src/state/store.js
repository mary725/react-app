import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import {
    getCategoriesMiddleware,
    addCategoryMiddleware,
    deleteCategoryMiddleware,
    editCategoryMiddleware
} from '../state/categoriesTree/middlewares';
import {
    getTodosMiddleware,
    addTodoMiddleware,
    updateTodoMiddleware
} from '../state/todos/middlewares';

export default function configureStore(initialState) {
    const middleware = [
        createLogger(),
        getCategoriesMiddleware,
        addCategoryMiddleware,
        deleteCategoryMiddleware,
        editCategoryMiddleware,
        getTodosMiddleware,
        addTodoMiddleware,
        updateTodoMiddleware
    ];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
};
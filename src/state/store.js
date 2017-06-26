import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import { getCategoriesMiddleware } from '../state/categoriesTree/middlewares'; // todo move
import { getTodosMiddleware } from '../state/todos/middlewares';

export default function configureStore(initialState) {
    const middleware = [createLogger(), getCategoriesMiddleware, getTodosMiddleware];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
};
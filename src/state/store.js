import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import {
    customLoggerMiddleware
} from '../state/utils/middlewares';
import { history } from '../App.route';

export default function configureStore(initialState) {
    const middleware = [
        routerMiddleware(history),
        thunk,
        createLogger(),
        customLoggerMiddleware
    ];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');

            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
};
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

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
    const store = createStore(connectRouter(history)(rootReducer), initialState, applyMiddleware(...middleware));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');

            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
};
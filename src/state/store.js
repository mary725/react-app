import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import { history } from '../App.route';

export default function configureStore(initialState) {
    const middleware = [
        routerMiddleware(history),
        thunk
    ];
    const composeEnhancers = process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');

            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
};
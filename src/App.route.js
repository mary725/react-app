import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';
import NotFound from './pages/NotFound';

export const history = createBrowserHistory();

const paths = {
    root: '/',
    todos: '/todos/:categoryId?',
    todoProfile: '/todos/:categoryId/:todoId'
};

export const route = (
    <ConnectedRouter history={history}>
        <Switch>
            <Route
                exact
                path={paths.root}
                component={TodosPage}/>
            <Route
                exact
                path={paths.todos}
                component={TodosPage}/>
            <Route
                path={paths.todoProfile}
                component={TodoProfilePage}/>
            <Route component={NotFound}/>
        </Switch>
    </ConnectedRouter>
);
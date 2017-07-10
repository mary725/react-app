import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';
import NotFound from './pages/NotFound';

export const route = (
    <Router>
        <Switch>
            <Route
                exact
                path='/'
                component={TodosPage}/>
            <Route
                exact
                path='/todos/:categoryId'
                component={TodosPage}/>
            <Route
                exact
                path='/todoProfile/:categoryId/:todoId'
                component={TodoProfilePage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './pages/Layout';
import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';
import NotFound from './pages/NotFound';

export const rootRoute = (
    <Router>
        <Switch>
            <Route
                exact
                path='/'
                component={Layout}></Route>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export const pageRoutes = (
    <Switch>
        <Route
            exact
            path='/todos/:categoryId'
            component={TodosPage}/>
        <Route
            exact
            path='/todoProfile/:categoryId/:todoId'
            component={TodoProfilePage}/>
    </Switch>
);
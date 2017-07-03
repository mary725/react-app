import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './pages/Layout';
import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';
import NotFound from './pages/NotFound';
/*
 <Route component={NotFound}/>
*/
export const rootRoute = (
    <Router>
        <Switch>
            <Route
                path='/'
                component={Layout}></Route>
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
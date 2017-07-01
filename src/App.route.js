import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './pages/Layout';
import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';

export const rootRoute = (
    <Router>
        <Route path='/' component={Layout}></Route>
    </Router>
);

export const pageRoutes = (
    <Switch>
        <Route exact path='/todos/:categoryId' component={TodosPage}/>
        <Route exact path='/todoProfile/:categoryId/:todoId' component={TodoProfilePage}/>
    </Switch>
);
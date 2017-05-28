import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';

const routes = (
    <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/todos' component={TodosPage}/>
        <Route path='/todoProfile' component={TodoProfilePage}/>
    </Switch>
);

export default routes;
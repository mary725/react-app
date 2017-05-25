import React from 'react';
import { Route } from 'react-router';

import * as routeConstants from './constants/routes';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';

const routes = (
    <div>
        <Route path='/' component={HomePage}></Route>
        <Route path={routeConstants.todos} component={TodosPage}/>
        <Route path={routeConstants.todoProfile} component={TodoProfilePage}/>
    </div>
);

export default routes;
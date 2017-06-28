import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';

const routes = (
    <Switch>
        <Route exact path='/todos/:categoryId' component={TodosPage}/>
        <Route exact path='/todoProfile/:categoryId/:todoId' component={TodoProfilePage}/>
    </Switch>
);

export default routes;
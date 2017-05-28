import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { } from 'react-router-dom';

import TodosPage from './pages/TodosPage';
import TodoProfilePage from './pages/TodoProfilePage';

const routes = (
    <Router>
        <Switch>
            <Route exact path='/' component={TodosPage}></Route>
            <Route path='/todos' component={TodosPage}/>
            <Route path='/todoProfile' component={TodoProfilePage}/>
        </Switch>
    </Router>
);

export default routes;
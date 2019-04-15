import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route component={Page404}></Route>
        </Switch>
    </App>;

export default AppRoutes;

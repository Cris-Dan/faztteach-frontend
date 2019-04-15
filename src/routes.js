import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Chat from './components/Chat/Chat';
import Geoloco from './components/Geoloco/Geoloco';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/chat" component={Chat}></Route>
            <Route exact path="/geoloco" component={Geoloco}></Route>
            <Route component={Page404}></Route>
        </Switch>
    </App>;

export default AppRoutes;

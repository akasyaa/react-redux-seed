import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './components/app'

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
            </Route>
        </Router>
    );
}

export default Routes;

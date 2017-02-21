import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './components/app';
import Main from './components/main';

/*
    Component routes for code splitting
*/
const componentRoutes = {
    component: App,
    path: '/',
    indexRoute: { component: Main },
    childRoutes: [
        {
            path: 'route',
            getComponent(location, cb) {
                System.import('./components/newroute')
                    .then(module => cb(null, module.default))
            }
        }
    ]
};

const Routes = () => {
    return (
        <Router history={browserHistory} routes={componentRoutes} />
    );
}

export default Routes;

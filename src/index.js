import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';

import '../assets/style/style.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

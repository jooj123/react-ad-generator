import React from 'react';
import { render } from 'react-dom';
import NotFound from './components/NotFound/NotFound';
import App from './components/App/App';
import AdGenerator from './components/AdGenerator/AdGenerator';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AdGenerator} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('main'));

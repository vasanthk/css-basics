import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';

const history = createBrowserHistory();

React.render(
  <Router children={routes} history={history}/>,
  document.getElementById('react-view')
);
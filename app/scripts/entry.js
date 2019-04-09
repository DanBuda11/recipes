import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import App from './app';
import Home from './Home';
import Recipe from './Recipe';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router
    history={appHistory}
    onUpdate={() => {
      window.scrollTo(0, 0);
    }}
  >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:recipeId/recipe" component={Recipe} />
    </Route>
  </Router>,
  document.getElementById('main'),
);

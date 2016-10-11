import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import App from './app';
import Home from './Home';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/new" component={NewRecipe} />
			<Route path="/:recipeId/recipe" component={Recipe} />
		</Route>
	</Router>
), document.querySelector('main'));

// Things this will need:
// responsive design, especially for phone & tablet
// storage of recipe info in a separate file in an array w/objects for recipes
// Recipe info:
// name, ingredients & amounts, cooking steps, photo of recipe
// Use React Router for page navigation
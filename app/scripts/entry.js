import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import App from './app';
import Home from './Home';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Account from './Account';
import Login from './Login';
import EditProfile from './EditProfile';
import ManageRecipes from './ManageRecipes';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/new" component={NewRecipe} />
			<Route path="/account" component={Account} />
			<Route path="/edit-profile" component={EditProfile} />
			<Route path="/manage-recipes" component={ManageRecipes} />
			<Route path="/:recipeId/recipe" component={Recipe} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
), document.querySelector('main'));

// Things this will need:
// responsive design, especially for phone & tablet
// storage of recipe info in a separate file in an array w/objects for recipess
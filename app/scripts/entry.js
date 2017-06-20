import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import App from './app';
import Home from './Home';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Account from './Account';
import Login from './Login';
import EditProfile from './EditProfile';
import ManageRecipes from './ManageRecipes';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render((
	<Router history={appHistory} onUpdate={() => {
		window.scrollTo(0, 0);
	}}>
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
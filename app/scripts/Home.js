import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';
import { Link } from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {recipes: Recipes};
	},
	// componentDidMount: function() {
	// 	// Recipes.on('update', this.updateRecipes);
	// 	Recipes.fetch();
	// },
	// componentWillUnmount: function() {
	// 	Recipes.off('update');
	// },
	// updateRecipes: function() {
	// 	this.setState({Recipes: Recipes});
	// },
	// filter: function() {
	// 	console.log(this.state.recipes);
	// 	let courses = this.state.recipes.filter((course, i) => {
	// 		if(course === 'main') {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 	});
	// 	this.setState({recipes: courses});
	// },
	// search: function() {
	// 	// this will need to filter over the recipeData array
	// 	// when filtering over, check to see if input keyword matches anything in
	// 	// the entire array
	// 	// Need to make it case-insensitive
	// 	let searchResults = this.state.recipes.filter((search, i) => {
	// 		let keyword = $('#searchInput').val();
	// 		if (search.name.includes(keyword) === true || search.notes.includes(keyword) === true) {
	// 			return true;
	// 		} else if (search.ingredients.filter((ingredient, i) => {
				
	// 		}) || search.steps = 1) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 	});
	// 	this.setState({recipes: searchResults});
	// },
	render: function() {
		const recipes = this.state.recipes.sort(function(a,b) {
			let nameA = a.name.toLowerCase();
			let nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		}).map((recipe, i) => {
			return (
			<RecipeThumb
				key={i}
				id={i}
				image={recipe.image}
				name={recipe.name}
				/>);
		});
		return (
			<div>	
				<div className="addNew">
					<Link to="/account" className="button">My Account</Link>
					<Link to="/new" className="button">Add a Recipe</Link>
					<Link to="/login" className="button">Login</Link>
				</div>
				<label htmlFor="courseFilter">Filter by:</label>
				<select id="courseFilter" onClick={this.filter}>
					<option value="main">Main Dishes</option>
					<option value="sides">Sides</option>
					<option value="soups">Soups</option>
					<option value="seasonings">Seasonings</option>
				</select>
				<label htmlFor="searchForm">Keyword Search:</label>
				<form id="searchForm" onClick={this.search}>
					<input type="text" id="searchInput"></input>
					<button type="submit">Search</button>
				</form>
				<div className="grid">
					{recipes}
				</div>
			</div>
		);
	}
});
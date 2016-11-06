import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';
import { Link } from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			recipes: Recipes,
			currentPage: 1
		};
	},
	// componentDidMount: function() {
	// 	// Recipes.on('update', this.updateRecipes);
	// 	Recipes.fetch();
	// },
	// componentWillUnmount: function() {
	// 	Recipes.off('update');
	// },
	updateRecipes: function() {
		this.setState({recipes: Recipes});
	},
	courseFilter: function() {
		let select = document.getElementById('courseFilter');
		if (select.value === 'all') {
			this.setState({recipes: Recipes});
		} else {
			let filteredCourses = Recipes.filter((recipe, i) => {
				if (recipe.course === select.value) {
					return true;
				} else {
					return false;
				}
			});
			this.setState({recipes: filteredCourses});
		}
	},
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
				key={recipe.id}
				id={recipe.id}
				image={recipe.image}
				name={recipe.name}
				course={recipe.course}
				/>);
		});
		// const maxPages = Math.ceil(recipes.length / 10);
		return (
			<div className="gridContainer">
				<div className="courseFilterDiv">
					<label htmlFor="courseFilter">Search by course:</label>
					<select id="courseFilter" onChange={this.courseFilter}>
						<option value="all">Show All</option>
						<option value="main">Main Courses</option>
						<option value="sides">Sides</option> 
						<option value="soups">Soups</option>
						<option value="salads">Salads</option>
						<option value="breakfasts">Breakfasts</option>
						<option value="seasonings">Seasonings</option>
						<option value="desserts">Desserts</option>
					</select>
				</div>
				<div className="grid">
					{recipes}
				</div>
			</div>
		);
	}
});

// Below is return statement for render that includes other links & search/filter inputs

// return (
// 			<div>	
// 				<div className="addNew">
// 					<Link to="/account" className="button">My Account</Link>
// 					<Link to="/new" className="button">Add a Recipe</Link>
// 					<Link to="/login" className="button">Login</Link>
// 				</div>
// 				<label htmlFor="courseFilter">Filter by:</label>
// 				<select id="courseFilter" onClick={this.filter}>
// 					<option value="main">Main Dishes</option>
// 					<option value="sides">Sides</option>
// 					<option value="soups">Soups</option>
// 					<option value="seasonings">Seasonings</option>
// 				</select>
// 				<label htmlFor="searchForm">Keyword Search:</label>
// 				<form id="searchForm" onClick={this.search}>
// 					<input type="text" id="searchInput"></input>
// 					<button type="submit">Search</button>
// 				</form>
// 				<div className="grid">
// 					{recipes}
// 				</div>
// 			</div>
// 		);

// Below is code for pageup/down functions when clicking page arrows

// pageDown: function() {
// 		console.log('page down clicked');
// 		if (this.state.currentPage !== 1) {
// 			this.setState({currentPage: this.state.currentPage - 1});
// 		}
// 		console.log(this.state.currentPage);
// 	},
// 	pageUp: function() {
// 		console.log('page up clicked');
// 		if (this.state.currentPage !== Math.ceil(this.state.recipes.length / 10)) {
// 			this.setState({currentPage: this.state.currentPage + 1});
// 			const nextRecipes = this.state.recipes.filter((recipe, i) => {
// 				if (recipe.id >  && recipe.id <= this.state.currentPage * 10) {
// 					return true;
// 				} else {
// 					return false;
// 				}
// 			});

// 		}
// 		console.log('current page: ' + this.state.currentPage);
// 		console.log('next set of recipes: ' + nextRecipes)
// 		this.setState({recipes: nextRecipes});
// 	}

// Below is code for pageup/down arrows

// <div className="nextLast">
// 					<a onClick={this.pageDown}><i className="fa fa-long-arrow-left"></i></a><p>Page {this.state.currentPage} of {maxPages}</p><a onClick={this.pageUp}><i className="fa fa-long-arrow-right"></i></a>
// 				</div>
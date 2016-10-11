import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';
import { Link } from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {Recipes: Recipes};
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
	render: function() {
		const recipes = this.state.Recipes.map((recipe, i) => {
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
					<Link to="/new" className="button">Add a Recipe</Link>
				</div>
				<div className="grid">
					{recipes}
				</div>
			</div>
		);
	}
});
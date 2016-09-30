import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';

export default React.createClass({
	getInitialState: function() {
		return {Recipes: Recipes};
	},
	componentDidMount: function() {
		Recipes.on('update', this.updateRecipes);
		Recipes.fetch();
	},
	componentWillUnmount: function() {
		Recipes.off('update');
	},
	updateRecipes: function() {
		this.setState({Recipes: Recipes});
	},
	render: function() {
		const recipes = this.state.Recipes.map((recipe, i, array) => {
			return (
			<RecipeThumb
				key={i}
				image={recipe.image}
				name={recipe.name}
				/>);
		});
		return (
			<div className="grid">
				{recipes}
			</div>
		);
	}
});
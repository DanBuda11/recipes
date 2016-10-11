import React from 'react';
import { Link } from 'react-router';
import Recipes from './Recipes';

export default React.createClass({
	getInitialState: function() {
		let recipe = Recipes[this.props.params.recipeId];
		return {recipe: recipe};
	},
	render: function() {
		console.log(this.state.recipe.image);
		const ingredients = this.state.recipe.ingredients.map((ingredient, i) => {
			return (
				<li className="ingredients" key={i}>{this.state.recipe.ingredients[i]}</li>
			);
		});
		const steps = this.state.recipe.steps.map((step, i) => {
			return (
				<li className="steps" key={i}>{this.state.recipe.steps[i]}</li>
			);
		});
		return (
			<div className="recipeDiv">
				<Link className="homeLink" to ="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Home</Link>
				<div className="recipeContain">
					<h1>{this.state.recipe.name}</h1>
					<img src={require("./../images/" + this.state.recipe.image)} />
					<h4>Ingredients</h4>
					<ul>
						{ingredients}
					</ul>
					<h4>Instructions</h4>
					<ol>
						{steps}
					</ol>
				</div>
			</div>
		);
	}
});
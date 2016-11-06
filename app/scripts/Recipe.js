import React from 'react';
import { Link } from 'react-router';
import Recipes from './Recipes';

export default React.createClass({
	getInitialState: function() {
		const recipes = Recipes.sort(function(a,b) {
			let nameA = a.name.toLowerCase();
			let nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		let recipe = recipes[this.props.params.recipeId];
		return {recipe: recipe};
	},
	render: function() {
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
					{(this.state.recipe.description !== "") ? (<h4>Description</h4>) : ("")}
					{(this.state.recipe.description !== "") ? (<p>{this.state.recipe.description}</p>) : ("")}
					<div className="ingredientsDiv">
						<h4>Ingredients</h4>
						<ul>
							{ingredients}
						</ul>
					</div>
					<div className="stepsDiv">
						<h4>Instructions</h4>
						<ol>
							{steps}
						</ol>
					</div>
					{(this.state.recipe.notes !== "") ? (<h4>Notes</h4>) : ("")}
					{(this.state.recipe.notes !== "") ? (<p>{this.state.recipe.notes}</p>) : ("")}
				</div>
			</div>
		);
	}
});
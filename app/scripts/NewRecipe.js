import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {ingredients: [], steps: []};
	},
	handleIngredient: function() {
		let ingredient = $('.ingInput').val();
		console.log(ingredient);
		this.state.ingredients.push('<li>' + ingredient + '</li>');
		this.updateIngredients();
		$('.ingInput').val('');

	},
	handleStep: function() {
		let step = $('.stepInput').val();
		this.state.steps.push('<li>' + step + '</li>');
		this.updateSteps();
		$('.stepInput').val('');
	},
	submit: function() {
		let ingredients = this.state.ingredients.map((ingredient) => {
			return '<div>' + ingredient + '</div>';
		});
		$('.proof').html('');
		$('.proof').append(
			'<div>' + $('.recipeName').val() + '</div>',
			ingredients
		);

	},
	updateIngredients: function() {
		$('.ingDisplay').html('');
		$('.ingDisplay').html(this.state.ingredients);
	},
	updateSteps: function() {
		$('.stepDisplay').html('');
		$('.stepDisplay').html(this.state.steps);
	},
	render: function() {
		return (
			<div className="newContainer">
				<Link className="homeLink" to ="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Home</Link>
				<input className="recipeName" type="text" placeholder="Recipe Name"></input>
				<ul className="ingDisplay"></ul>
				<input className="ingInput" type="text" placeholder="1 cup milk"></input>
				<button className="ingButton" onClick={this.handleIngredient}>Add Ingredient</button>
				<ol className="stepDisplay"></ol>
				<input className="stepInput" type="text" placeholder="Chop onions"></input>
				<button className="stepButton" onClick={this.handleStep}>Add Step</button>
				<textarea placeholder="Makes 4 servings. (max 1000 characters)"></textarea>
				<button className="submitButton" onClick={this.submit}>Submit Recipe!</button>
				<div className="proof"></div>
			</div>
		);
	}
});

// Need image submission
// add required, test before submit
// min/max required lengths
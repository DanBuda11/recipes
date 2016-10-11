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

	},
	handleStep: function() {
		let step = $('.stepInput').val();
		this.state.steps.push('<li>' + step + '</li>');
		this.updateSteps();
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
				<input type="text" placeholder="Recipe Name"></input>
				<ul className="ingDisplay"></ul>
				<input className="ingInput" type="text" placeholder="1 cup milk"></input>
				<button className="ingButton" onClick={this.handleIngredient}>Add Ingredient</button>
				<ol className="stepDisplay"></ol>
				<input className="stepInput" type="text" placeholder="Chop onions"></input>
				<button className="stepButton" onClick={this.handleStep}>Add Step</button>
				<textarea placeholder="Makes 4 servings. (max 1000 characters)"></textarea>
				<button className="submitButton">Submit Recipe!</button>
			</div>
		);
	}
});

// name, ingredients (button to submit each time), steps (button to submit each time)
// notes, image, submit button

// add placeholders, required, test before submit

// text areas
// min/max required lengths
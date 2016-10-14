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
		if ($('.recipeName').val() === '') {
			$('.nameErr').toggle();
		};
		// $('.newContainer').slideUp();
		let ingredients = this.state.ingredients.map((ingredient) => {
			return '<li>' + ingredient + '</li>';
		});
		let steps = this.state.steps.map((step) => {
			return '<li>' + step + '</li';
		});
		
		// let ingVar = '<ul></ul>';
		// let stepVar = '<ol></ol>';
		// console.log(ingVar, stepVar);
		$('.proof').html('');
		$('.proof').append(
			'<div>' + $('.recipeName').val() + '</div>'
		);


		$('.proof').append(
			'<ul>' + ingredients + '</ul>'
		);

		// $(ingVar).append(ingredients);
		// $(stepVar).append(steps);
		// $('.proof').append(ingVar);
		$('.proof').append($('.notesBox').val());
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
			<div>
				<div className="newContainer">
					<Link className="homeLink" to ="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Home</Link>
					<input className="recipeName" type="text" placeholder="Apple Pie"></input>
					<div className="nameErr error">Name cannot be empty.</div>
					<ul className="ingDisplay"></ul>
					<input className="ingInput" type="text" placeholder="1 cup milk"></input>
					<button className="ingButton" onClick={this.handleIngredient}>Add Ingredient</button>
					<ol className="stepDisplay"></ol>
					<textarea className="stepInput" type="text" placeholder="Chop onions"></textarea>
					<button className="stepButton" onClick={this.handleStep}>Add Step</button>
					<textarea className="notesBox" placeholder="Makes 4 servings. (max 1000 characters)"></textarea>
					<button className="submitButton" onClick={this.submit}>Submit Recipe!</button>
				</div>
				<div className="proof"></div>
			</div>
		);
	}
});

// Need image submission
// add required, test before submit
// min/max required lengths
// Once user hits submit, take them to a "proof" page which renders all their input before submitting, and change
// the "submit" button on NewRecipe page to "Proof" or something similar
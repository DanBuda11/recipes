import React from 'react';
import { Link } from 'react-router';
import Recipes from './Recipes';

export default React.createClass({
  getInitialState() {
    const recipe = Recipes.filter((recipe, i) => {
      if (recipe.id === this.props.params.recipeId) {
        return true;
      }
      return false;
    }).pop();
    return { recipe };
  },
  render() {
    const ingredients = this.state.recipe.ingredients.map((ingredient, i) => (
      <li className="ingredients" key={i}>
        {ingredient}
      </li>
    ));
    const steps = this.state.recipe.steps.map((step, i) => (
      <li className="steps" key={i}>
        {step}
      </li>
    ));
    return (
      <div className="recipeDiv">
        <Link className="homeLink" to="/">
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
          Home
        </Link>
        <div className="recipeContain">
          <h1>{this.state.recipe.name}</h1>
          <img
            src={require(`./../images/${this.state.recipe.image}`)}
            alt={this.state.recipe.name}
          />
          {this.state.recipe.description !== '' ? <h4>Description</h4> : ''}
          {this.state.recipe.description !== '' ? <p>{this.state.recipe.description}</p> : ''}
          <div className="ingredientsDiv">
            <h4>Ingredients</h4>
            <ul>{ingredients}</ul>
          </div>
          <div className="stepsDiv">
            <h4>Instructions</h4>
            <ol>{steps}</ol>
          </div>
          <div className="notes">
            {this.state.recipe.notes !== '' ? <h4>Notes</h4> : ''}
            {this.state.recipe.notes !== '' ? <p>{this.state.recipe.notes}</p> : ''}
          </div>
        </div>
      </div>
    );
  },
});

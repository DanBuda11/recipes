import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Recipes from './Recipes';

export default function Recipe(props) {
  const params = useParams();
  const recipe = Recipes.filter((recipe, i) => {
    if (recipe.id === params.recipeId) {
      return true;
    }
    return false;
  }).pop();

  const ingredients = recipe.ingredients.map((ingredient, i) => (
    <li className="ingredients" key={i}>
      {ingredient}
    </li>
  ));

  const steps = recipe.steps.map((step, i) => (
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
        <h1>{recipe.name}</h1>
        <img src={require(`./../images/${recipe.image}`)} alt={recipe.name} />
        {recipe.description !== '' ? <h4>Description</h4> : ''}
        {recipe.description !== '' ? <p>{recipe.description}</p> : ''}
        <div className="ingredientsDiv">
          <h4>Ingredients</h4>
          <ul>{ingredients}</ul>
        </div>
        <div className="stepsDiv">
          <h4>Instructions</h4>
          <ol>{steps}</ol>
        </div>
        <div className="notes">
          {recipe.notes !== '' ? <h4>Notes</h4> : ''}
          {recipe.notes !== '' ? <p>{recipe.notes}</p> : ''}
        </div>
      </div>
    </div>
  );
}

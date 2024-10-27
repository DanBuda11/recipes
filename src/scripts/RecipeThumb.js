import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeThumb(props) {
  return (
    <Link to={`/${props.id}/recipe`} className="col-4">
      <div className="thumbContainer">
        <img src={require(`../images/${props.image}`)} alt={props.name} />
        <p className="recipeTitle">{props.name}</p>
        <p className="recipeCourse">{props.course}</p>
      </div>
    </Link>
  );
}

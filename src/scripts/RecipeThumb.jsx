import React from 'react';
import { Link } from 'react-router-dom';

const images = import.meta.glob('../images/*', {
  eager: true,
  import: 'default',
});

export default function RecipeThumb(props) {
  const capitalize = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const imageSrc = images[`../images/${props.image}`];

  return (
    <Link to={`/${props.id}/recipe`} className="col-4">
      <div className="thumbContainer">
        <img src={imageSrc} alt={props.name} />
        <p className="recipeTitle">{props.name}</p>
        <p className="recipeCourse">{capitalize(props.course)}</p>
      </div>
    </Link>
  );
}

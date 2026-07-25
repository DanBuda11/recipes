import { Link, useLocation } from 'react-router-dom';

const images = import.meta.glob('../images/*', {
  eager: true,
  import: 'default',
});

const capitalize = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function RecipeThumb(props) {
  const { search } = useLocation();

  const imageSrc = images[`../images/${props.image}`];

  return (
    <Link to={`/${props.id}/recipe${search}`} className="col-4">
      <div className="thumbContainer">
        <img src={imageSrc} alt={props.name} />
        <p className="recipeTitle">{props.name}</p>
        <p className="recipeCourse">{capitalize(props.course)}</p>
      </div>
    </Link>
  );
}

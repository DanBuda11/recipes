import { Link, useLocation, useParams } from 'react-router-dom';
import Recipes from './recipes';

const images = import.meta.glob('../images/*', {
  eager: true,
  import: 'default',
});

export default function Recipe() {
  const params = useParams();
  const { search } = useLocation();

  const recipe = Recipes.find((recipe) => recipe.id === params.recipeId);

  if (!recipe) {
    return (
      <div className="recipeDiv">
        <Link
          className="homeLink"
          to={{
            pathname: '/',
            search,
          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
          Home
        </Link>

        <div className="recipeContain">
          <h1>Recipe not found</h1>
          <p>Sorry, that recipe does not exist or may have been removed.</p>
        </div>
      </div>
    );
  }

  const imageSrc = images[`../images/${recipe.image}`];

  return (
    <div className="recipeDiv">
      <Link
        className="homeLink"
        to={{
          pathname: '/',
          search,
        }}
      >
        <i className="fa fa-long-arrow-left" aria-hidden="true" />
        Home
      </Link>
      <div className="recipeContain">
        <h1>{recipe.name}</h1>
        <img src={imageSrc} alt={recipe.name} />
        {recipe.description && (
          <>
            <h4>Description</h4>
            <p>{recipe.description}</p>
          </>
        )}
        <div className="ingredientsDiv">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="ingredients">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="stepsDiv">
          <h4>Instructions</h4>
          <ol>
            {recipe.steps.map((step) => (
              <li key={step} className="steps">
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="notes">
          {recipe.notes && (
            <>
              <h4>Notes</h4>
              <p>{recipe.notes}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

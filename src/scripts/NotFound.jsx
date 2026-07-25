import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="recipeDiv">
      <div className="recipeContain">
        <h1>404</h1>

        <p>Sorry, that page does not exist.</p>

        <Link className="homeLink" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

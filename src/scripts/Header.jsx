import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>
          Buda Fooda
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M7 2v8a3 3 0 0 0 2 2.83V22h2v-9.17A3 3 0 0 0 13 10V2h-2v6H9V2H7Zm10 0c-1.1 0-2 1.34-2 3v6c0 1.1.9 2 2 2h1v9h2v-9h1V5c0-1.66-.9-3-2-3h-2Z" />
          </svg>
        </h1>
      </Link>
    </div>
  );
}

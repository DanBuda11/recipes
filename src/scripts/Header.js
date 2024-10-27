import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>
          Buda Fooda
          <i className="fa fa-cutlery" aria-hidden="true" />
        </h1>
      </Link>
    </div>
  );
}

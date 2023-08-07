import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-header">
      <div className="container header-container">
        <h1 className="header-heading bold">Book Keepers</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-listItem">
              <Link className="header-link" to="/">
                Home
              </Link>
            </li>
            <li className="header-nav-listItem">
              <Link className="header-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

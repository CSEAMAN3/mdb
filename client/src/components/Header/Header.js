import React from "react";
import "./Header.css";

import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { user } = useAuth0();

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
            {!user && (
              <li className="header-nav-listItem">
                <Login />
              </li>
            )}
            {user && (
              <li className="header-nav-listItem">
                <Logout />
              </li>
            )}
            {user && user.email === "chris.seaman@techeducators.co.uk" && (
              <li>
                <Link className="" to="/admin">
                  admin
                </Link>
              </li>
            )}
          </ul>
          <Profile />
        </nav>
      </div>
    </header>
  );
}

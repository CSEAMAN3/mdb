import React from "react";

import "./Burger.css";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";

import { slide as Menu } from "react-burger-menu";

export default function Burger() {
  return (
    <Menu className="my-menu" width={"100vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <Login />
      <Logout />
      <Profile />
    </Menu>
  );
}

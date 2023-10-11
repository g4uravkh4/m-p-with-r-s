import React from "react";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;

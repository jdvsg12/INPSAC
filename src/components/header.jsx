import React from "react";
import { Link } from "react-router-dom";
import navBar from "../util/Header-data";
import logo from "../util/img/inpsac.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="inspac-img"></img>
        <h1>
          <Link to={navBar[0].link}>Psicologia y cultura</Link>
        </h1>
      </div>
      <nav>
        {navBar.map((link) => {
          return (
            <div key={link.id}>
              <Link to={link.link}>{link.text}</Link>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

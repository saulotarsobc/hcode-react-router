// import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

function Header() {
  return (
    <header>
      <a href="/home" className="logo" aria-label="Logo">
        <img src={logo} alt="Logo da porsche" />
      </a>

      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><Link to="/descubra">Descubra</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

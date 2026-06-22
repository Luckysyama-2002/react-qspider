

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SPACEX</div>
      <div className="nav-links">
        <a href="#falcon9">Falcon 9</a>
        <a href="#heavy">Falcon Heavy</a>
        <a href="#dragon">Dragon</a>
        <a href="#starship">Starship</a>
      </div>
    </nav>
  );
}

export default Navbar;
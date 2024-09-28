import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        DepEd <span className="green">DavNor</span>
      </a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#system">Systems</a>
        </li>

        <li>
          <a href="#teams">Team</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
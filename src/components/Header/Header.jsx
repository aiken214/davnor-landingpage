import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
        <div className="wrapper">
          <div className="welcome-container">
            <h1 className="welcome-name">Welcome to DepEd Davao del Norte Division</h1>    
            <h2 className="tagline-name">"Basta DavNor, Excellence is the Core!"</h2>
          </div>
        </div>
    </header>
  );
};

export default Header;
import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import { images } from "../Data.js";

function Header() {
  return (
    <header>
        <div className="wrapper">          
          <Navbar />
          <div className="welcome-container">
            <h1 className="welcome-name">Welcome to DepEd Davao del Norte Division</h1>    
            <h2 className="tagline-name">"Basta DavNor, Excellence is the Core!"</h2>
          </div>          
        </div>

       
          <Carousel images={images} />
        
        
    </header>
  );
};

export default Header;
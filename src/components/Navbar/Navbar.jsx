import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { davnor_logo } from "../../assets";


const Navbar = () => {
  const [navbarTop, setNavbarTop] = useState('10px'); // Initially 10px

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarTop('0px');  // Stick to the top when scrolled
      } else {
        setNavbarTop('20px'); // Reset to 10px when back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ top: navbarTop }}>
      <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={davnor_logo} alt="Division Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <a href="#" className="logo">
          DepEd DavNor
        </a>
      </div>

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
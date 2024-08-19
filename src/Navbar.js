import React, { useState } from 'react';
import images from './images/logo4.webp';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='head'>
      <div className="logo">
        <img src={images} alt="Allied Contracting Engineers Logo" />
        <span>ALLIED CONSTRUCTION & ENGINEERING (ACE)</span>
      </div>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={isMenuOpen ? 'nav-list active' : 'nav-list'}>
          <li><a href="#hero">Home</a></li> 
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>            
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

import React from 'react';
import images from './images/logo1.jpeg';

function Header() {
  return (
    <header className='head'>
      <div className="logo">
        <img src={images} alt="Allied Contracting Engineers Logo" />
        <span>ALLIED CONSTRUCTION & ENGINEERING (ACE)</span>
      </div>
      <nav>
        <ul>
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

export default Header;

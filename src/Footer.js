import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://x.com/NJUGUNAJAM2003"><i className="fab fa-twitter"></i></a></li>
        </ul>
        <p>&copy; 2024 Allied Contracting Engineers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import electricIcon from './images/icon3.png';
import constructionIcon from './images/icon2.jpg';
import plumbingIcon from './images/icon1.png';
import FadeInSection from './fadein';

function Services() {
  return (
    <section id="services">
      <FadeInSection>

        <div className="container">
          <h2>Our Services</h2>
          <div className="service-item">
            <img src={plumbingIcon} alt="Plumbing" />
            <h3>Plumbing Services</h3>
            <p>Expert plumbing solutions for residential and commercial properties.</p>
          </div>
          <div className="service-item">
            <img src={electricIcon} alt="Electrical" />
            <h3>Electrical Engineering</h3>
            <p>Comprehensive electrical services including installations and repairs.</p>
          </div>
          <div className="service-item">
            <img src={constructionIcon} alt="Construction" />
            <h3>Construction Management</h3>
            <p>Professional construction management for all project sizes.</p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Services;

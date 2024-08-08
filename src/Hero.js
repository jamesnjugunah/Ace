import React from 'react';
import FadeInSection from './fadein';

function Hero() {
  return (
    <section id="hero" >
      <FadeInSection>
        <div className="hero-content">
          <h1>Your Trusted Partner in Plumbing Services</h1>
          <p>Delivering Quality, Efficiency, and Reliability</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Hero;

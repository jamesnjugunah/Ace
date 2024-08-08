import React from 'react';
import irrigation from './images/irrigation2.jpg';
import sanitary from './images/faucet2.jpg';
import repair from './images/repair.jpg';
import boiler from './images/boiler.jpg';
import construction from './images/cons.jpg';
import electric from './images/electricr.jpg';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="project-item">
          <img src={irrigation} alt="Project 1" />
          <h3>Irrigation Systems</h3>
          <p><strong>Affordable installations for efficient watering.</strong></p>

        </div>
        <div className="project-item">
          <img src={sanitary} alt="Project 2" />
          <h3>Sanitary Appliances</h3>
          <p><strong>Quality installations at budget-friendly rates.</strong></p>

        </div>
        <div className="project-item">
          <img src={repair} alt="Project 2" />
          <h3>Repairs & maintenance</h3>
          <p><strong>Reliable service to keep your systems running smoothly.</strong></p>

        </div>
        <div className="project-item">
          <img src={boiler} alt="Solar Heater Installations" />
          <h3>Solar Heater Installations</h3>
          <p><strong>Efficient solar heating solutions for energy savings.</strong></p>
        </div>
        <div className="project-item">
          <img src={electric} alt="Electric Repairs" />
          <h3>Electric installation $ Repairs</h3>
          <p><strong>Expert repairs to ensure safe and reliable electrical systems.</strong></p>
        </div>

        <div className="project-item">
          <img src={construction} alt="Construction" />
          <h3>Construction</h3>
          <p><strong>High-quality building services tailored to your needs.</strong></p>
        </div>

        

      </div>
    </section>
  );
}

export default Projects;

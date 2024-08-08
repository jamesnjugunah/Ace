import React from 'react';
import FadeInSection from './fadein';

function About() {
  return (
    <section id="about">
      <FadeInSection>
        <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
          <h2>About Allied Contracting Engineers(ACE)</h2>
          <p>
          At Allied Contracting Engineers, we turn your visions into reality with expert plumbing, electrical, and construction services. Our team of skilled professionals is dedicated to delivering top-quality work, innovative solutions, and exceptional customer service.
          </p>
          <h3>Why Choose ACE?</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><strong>Expertise:</strong> Decades of industry experience.</li>
            <li><strong>Reliability:</strong> On-time, on-budget delivery.</li>
            <li><strong>Quality:</strong> Uncompromising standards in every project.</li>
          </ul>
          <p>Partner with us for engineering solutions that exceed expectations and build lasting trust.</p>
        </div>
      </FadeInSection>
    </section>
  );
}

export default About;

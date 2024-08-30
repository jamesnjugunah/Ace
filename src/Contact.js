import React from 'react';
import FadeInSection from './fadein';

function Contact() {
  return (
    <section id="contact">
      <FadeInSection>
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-details">
            <p><strong>Phone:</strong> 0727 609898</p>
            <p><strong>Email:</strong> njuguna.kariuki22@students.dkut.ac.ke</p>
            <p><strong>Address:</strong> 1210 Gatuanyaga, Thika, Nairobi</p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
export default Contact;


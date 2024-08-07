import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@plumbingcompany.com</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
}

export default Contact;

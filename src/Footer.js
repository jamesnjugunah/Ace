import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Plumbing Company. All rights reserved.</p>
      <div>
        <a href="https://www.facebook.com/jameskariuki.njuguna.5/">Facebook</a>
        <a href="https://x.com/NJUGUNAJAM2003">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;

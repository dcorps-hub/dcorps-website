import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {currentYear} - dCorps.com</p>
      </div>
      <div className="footer-right">
        <Link to="/terms-of-use">Terms of Use</Link>
        <a
          href="#dcorps"
          target="_blank"
          rel="noopener noreferrer"
        >
          dCorps #A0000001
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Isaac Jiang, Jayden Zhao & Savio Joseph Benher. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

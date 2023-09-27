import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          {/* Your footer logo here */}
          <img alt="Your Furniture Store" />
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer__social">
          {/* Social media icons or links */}
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Your Furniture Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

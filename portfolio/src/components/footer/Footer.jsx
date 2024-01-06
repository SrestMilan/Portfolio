import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <h1 className="footer__title">Milan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Service
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/SrestMilan"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/milan-shrestha-259630207/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169;CryptCoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*Change Background Header*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*Toggle Menu*/
  const [toggle, setShowMenu] = useState(false);
  const [activeNavigation, setActiveNavigation] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Milan
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu "}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNavigation("#home")}
                className={
                  activeNavigation === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNavigation("#about")}
                className={
                  activeNavigation === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNavigation("#skills")}
                className={
                  activeNavigation === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNavigation("#services")}
                className={
                  activeNavigation === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNavigation("#portfolio")}
                className={
                  activeNavigation === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNavigation("#contact")}
                className={
                  activeNavigation === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => setShowMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!toggle)}>
          <i class="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${s.header} ${s.sticky}`}>
      <Container>
        <div className={s.logo}>
          <svg
            version="1.1"
            baseProfile="basic"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 70.9 61.9"
          >
            <g>
              <circle
                fill="none"
                stroke="#5c62ec"
                strokeWidth="2"
                strokeMiterlimit="10"
                cx="35.4"
                cy="31"
                r="20.6"
              />
              <polyline
                fill="none"
                stroke="#5c62ec"
                strokeWidth="2"
                strokeMiterlimit="10"
                points="18,19.4 26.8,31.1 32.3,25.3 32.3,36.9 	
		"
              />
              <line
                fill="none"
                stroke="#5c62ec"
                strokeWidth="2"
                strokeMiterlimit="10"
                x1="21.1"
                y1="29.5"
                x2="21.1"
                y2="36.9"
              />
              <polyline
                fill="none"
                stroke="#5c62ec"
                strokeWidth="2"
                strokeMiterlimit="10"
                points="37.6,36.9 37.6,24.6 43.2,32.1 48.4,25.3 
		48.4,44.9 48.4,47.4 	"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <p>MaxMay Portfolio</p>
        </div>

        <Nav isOpen={isOpen} handleHamburgerClick={handleHamburgerClick} />

        <button
          onClick={toggleTheme}
          className={
            theme === "light"
              ? s.dark_mode_btn
              : `${s.dark_mode_btn} ${s.dark_mode_btn_active}`
          }
        >
          <img src={sun} alt="Light mode" className={s.dark_mode_icon} />
          <img src={moon} alt="Dark mode" className={s.dark_mode_icon} />
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          className={s.menu_icon}
          onClick={handleHamburgerClick}
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </Container>
    </header>
  );
}

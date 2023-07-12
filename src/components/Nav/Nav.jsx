import React from "react";
import s from "./style.module.css";
import { Link as ScrollLink } from "react-scroll";

export default function Nav({ isOpen, handleHamburgerClick }) {
  return (
    <>
      <div
        onClick={handleHamburgerClick}
        className={`${s.menu_backdrop} ${isOpen ? s.open : ""}`}
      ></div>

      <nav className={`${s.nav} ${isOpen ? s.open : ""}`}>
        <div className={s.logo}>
          <svg
            version="1.1"
            baseProfile="basic"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 70.9 61.9"
            width="80px"
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

        <ul>
          <li>
            <ScrollLink
              onClick={handleHamburgerClick}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={handleHamburgerClick}
              activeClass="active"
              to="stack"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={handleHamburgerClick}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={handleHamburgerClick}
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        <div className={s.contacts_list}>
          <a
            href="mailto:MaksymMaievskyi@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={s.contacts_item}
          >
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              width="40px"
              height="40px"
            >
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M45,0C20.1,0,0,20.1,0,45s20.1,45,45,45s45-20.1,45-45S69.9,0,45,0z M72,57.5c0,4.2-3.4,7.7-7.7,7.7H25.7
		c-4.2,0-7.7-3.4-7.7-7.7v-25c0-4.2,3.4-7.7,7.7-7.7h38.7c4.2,0,7.7,3.4,7.7,7.7L72,57.5L72,57.5z"
                />
                <path
                  d="M54.5,44.8l10.8-10.6c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L48,44.9c-1.6,1.6-4.3,1.6-5.9,0L27.9,30.9
		c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l10.8,10.6L24.7,55.4c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.5,1,0.7,1.6,0.7
		c0.6,0,1.1-0.2,1.6-0.7L38.7,48l0.1,0.1c1.7,1.7,3.9,2.5,6.1,2.5s4.4-0.8,6.1-2.5l0.1-0.1l10.9,10.7c0.4,0.4,1,0.7,1.6,0.7
		c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L54.5,44.8z"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/maksym-maievskyi/"
            className={s.contacts_item}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="40px" height="40px" viewBox="0 0 30 30">
              <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
            </svg>
          </a>

          <a
            href="https://github.com/RedMaxMay"
            target="_blank"
            rel="noreferrer"
            className={s.contacts_item}
          >
            <svg
              className={s.svg_git}
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}

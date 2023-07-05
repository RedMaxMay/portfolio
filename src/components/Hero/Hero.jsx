import React from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import heroImg from "./img/main.png";
import DownloadCV from "../DownloadCV/DownloadCV";

export default function Hero() {
  return (
    <section id="about" className={s.hero_wrap}>
      <Container>
        <div className={s.hero}>
          <div className={s.hero_img_wrap}>
            <img className={s.hero_img} src={heroImg} alt="Max Maievskyi" />
          </div>

          <div className={s.hero_text}>
            <h1 className={s.hero_title}>
              <span>Hello there 👋 </span>
              <br />
              My name is <span className={s.hero_name}>Max Maievskyi</span>
              <br />
              I'm a Front-End Developer
            </h1>
            <p>
              I found inspiration in the converting power of code, where a
              simple idea can evolve into a fully functional and visually
              striking application. I enjoy bringing user interfaces to life
              with clean code and smooth functionality.
            </p>
            <p>
              You can explore my projects here and find more details about me in
              my CV:
            </p>
            <DownloadCV />
          </div>
        </div>
      </Container>
    </section>
  );
}

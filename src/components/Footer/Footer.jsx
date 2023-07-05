import React from "react";
import s from "./style.module.css";
import Nav from "../Nav/Nav";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Nav />
      <div className={s.secondary}>©MaxMay</div>
    </footer>
  );
}

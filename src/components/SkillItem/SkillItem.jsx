import React from "react";
import s from "./style.module.css";

export default function SkillItem({ name, img }) {
  return (
    <figure className={s.skill_item} key={name}>
      <img src={img} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

import React from "react";
import Container from "../Container/Container";
import s from "./style.module.css";
import { skillsList } from "./skillsList";
import SkillItem from "../SkillItem/SkillItem";

export default function TechStack() {
  return (
    <section id="stack" className={s.skills_wrap}>
      <Container>
        <h2 className={s.title}>My Tech Stack</h2>
        <p className={s.descr}>Technologies I’ve been working with recently</p>

        <div className={s.skills_list}>
          {skillsList.map((item) => (
            <SkillItem key={item.name} name={item.name} img={item.img} />
          ))}
        </div>
      </Container>
    </section>
  );
}

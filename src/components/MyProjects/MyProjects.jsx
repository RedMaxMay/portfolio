import React from "react";
import Container from "../Container/Container";
import s from "./style.module.css";
import { projectList } from "./projectsList";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function MyProjects() {
  return (
    <section id="projects" className={s.wrap}>
      <Container>
        <h2 className={s.title}>Projects</h2>
        <p className={s.descr}>
          My Recent Projects: Bringing Ideas to Life through Inspiration,
          Learning, and Dedication
        </p>

        <div className={s.projects}>
          {projectList.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectsH2,
  ProjectsCard,
  ProjectsP,
  ProjectsImg,
  ButtonContainer,
  Bar
} from "./Projects";
// import "../../App.css";
import astroscope from "../../astroscope.png"
import knowsy from "../../knowsy.png"
import shelfi from "../../shelfi2.png"
import placeholder from "../../placeholder.png"
import jsquiz from "../../jsquiz.png"
// import weatherdash from "../../weatherdash.png"

import "./Projects.css"

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>
          The Projects
          <Bar />
        </ProjectsH1 >

<div className="projects">
        <div class="project-card">
  <img src={astroscope} alt="Astroscope" />
  <div className="project-caption">
    <h2>Astroscope<span>HTML / CSS / JavaScript / Photoshop</span></h2>
    <p>A web app that shows the user's daily horoscope along with NASA's astronomy photo of the day.</p><a href="#" class="project-button">Demo</a><a href="#" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={knowsy} alt="Knowsy" />
  <div className="project-caption">
    <h2>Knowsy<span>React / MongoDB / Node / Express</span></h2>
    <p>A web app that lets users take,create, and share themed quizzes for any occasion.</p><a href="#" class="project-button">Demo</a><a href="#" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={shelfi} alt="Shelfi" />
  <div className="project-caption">
    <h2>Shelfi<span>HTML / CSS / JavaScript / Node / MySQL</span></h2>
    <p>A search engine app for book lovers to find their next good read and view book details.</p><a href="#" class="project-button">Demo</a><a href="#" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={jsquiz} alt="Shelfi" />
  <div className="project-caption">
    <h2>JS Quiz<span>HTML / CSS / JavaScript</span></h2>
    <p>A fun, timed quiz that tests beginner developers' knowledge on javascript concepts and records.</p><a href="#" class="project-button">Demo</a><a href="#" class="project-button">Repo</a>
  </div>
</div>


</div>
        
      </ProjectsContainer>
    </>
  );
};

export default Projects;

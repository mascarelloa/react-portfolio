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
import weatherdash from "../../weatherdash.png"
import {BsBoxArrowUpRight} from "react-icons/bs"

import "./Projects.css"

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>
          Projects
          <Bar />
        </ProjectsH1 >

        <div className="project-row">
  <div className="project-image">
    <img src={knowsy}/>
  </div>
  <div className="project-details">
    <h2>Knowsy</h2>
    <h3>React, MongoDB, Express, Node, and CSS.</h3>
    <p>A web application that allows a user to take and create categorized quizzes for fun or study.</p>
    <div className="project-buttons">
    <a href="https://github.com/mascarelloa/knowsy" target="_blank">View Repo <BsBoxArrowUpRight id="go-icon" /></a> 
    <a href="https://agile-basin-43454.herokuapp.com/" target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
  </div>
</div>

<div className="project-row">
  <div className="project-image">
    <img src={astroscope}/>
  </div>
  <div className="project-details">
    <h2>Astroscope</h2>
    <h3>HTML, CSS, and JavaScript.</h3>
    <p>A web app that shows the user's daily horoscope along with NASA's astronomy photo of the day.</p>
    <div className="project-buttons">
    <a href="https://github.com/mascarelloa/astroscope" target="_blank">View Repo <BsBoxArrowUpRight id="go-icon" /></a> 
    <a href="https://mascarelloa.github.io/astroscope/" target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
  </div>
</div>


<div className="project-row">
  <div className="project-image">
    <img src={shelfi}/>
  </div>
  <div className="project-details">
    <h2>Shelfi</h2>
    <h3>HTML, CSS, JavaScript, Node, and MySQL.</h3>
    <p>A search engine app for book lovers to find their next good read and view book details.</p>
    <div className="project-buttons">
    <a href="https://github.com/mascarelloa/shelfi" target="_blank">View Repo <BsBoxArrowUpRight id="go-icon" /></a> 
    <a href="https://myshelfi.herokuapp.com/" target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
  </div>
</div>

<div className="project-row">
  <div className="project-image">
    <img src={jsquiz}/>
  </div>
  <div className="project-details">
    <h2>JS Quiz</h2>
    <h3>HTML, CSS, and JavaScript.</h3>
    <p>A fun, timed quiz that tests beginner developers' knowledge on javascript concepts and records.</p>
    <div className="project-buttons">
    <a href="https://github.com/mascarelloa/code-quiz" target="_blank">View Repo <BsBoxArrowUpRight id="go-icon" /></a> 
    <a href="https://mascarelloa.github.io/code-quiz/" target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
  </div>
</div>


<div className="project-row">
  <div className="project-image">
    <img src={weatherdash}/>
  </div>
  <div className="project-details">
    <h2>Weather Dash</h2>
    <h3>HTML, CSS, and JavaScript.</h3>
    <p>An app that displays the current weather and forecast for the next five days for any city.</p>
    <div className="project-buttons">
    <a href="https://github.com/mascarelloa/weather-dashboard" target="_blank">View Repo <BsBoxArrowUpRight id="go-icon" /></a> 
    <a href="https://mascarelloa.github.io/weather-dashboard/" target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
  </div>
</div>

        
      </ProjectsContainer>
    </>
  );
};

export default Projects;

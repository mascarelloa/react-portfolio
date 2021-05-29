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
  Bar,
 
} from "./Projects";
import "../../App.css";

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>
          The Projects
          <Bar />
        </ProjectsH1>

        <ProjectsWrapper>
        <ProjectsCard>
                    <ProjectsImg>
                    <img src="https://tinyurl.com/4dxb4yjp"/></ProjectsImg>
                    <ProjectsH2>
                        Astroscope
                    </ProjectsH2>
                    <ProjectsP>
                    A web app that shows the user's daily horoscope along with NASA's astronomy photo of the day.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="https://github.com/mascarelloa/astroscope" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="https://mascarelloa.github.io/astroscope/" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                    
                </ProjectsCard>

                <ProjectsCard>
                    <img src="https://tinyurl.com/tsvvs4mw"/>
                    <ProjectsH2>
                        Shelfi
                    </ProjectsH2>
                    <ProjectsP>
                    A search engine app for book lovers to find their next good read and view book details.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="https://mascarelloa.github.io/shelfi/" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="https://myshelfi.herokuapp.com/" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                </ProjectsCard>

                <ProjectsCard>
                    <img src="https://tinyurl.com/6kyhxwcz"/>
                    <ProjectsH2>
                        Knowsy
                    </ProjectsH2>
                    <ProjectsP>
                        A web app that lets users take,create, and share themed quizzes for any occasion.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                </ProjectsCard>
                <ProjectsCard>
                    <img src="https://tinyurl.com/mv35xhf5"/>
                    <ProjectsH2>
                       Weather Dash
                    </ProjectsH2>
                    <ProjectsP>
                    An app that displays the current weather and forecast for the next five days for any city.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="https://github.com/mascarelloa/weather-dashboard" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="https://mascarelloa.github.io/weather-dashboard/" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                </ProjectsCard>
                <ProjectsCard>
                    <img src="https://tinyurl.com/kcwanxzc"/>
                    <ProjectsH2>
                       JavaScript Quiz
                    </ProjectsH2>
                    <ProjectsP>
                    A fun, timed quiz that tests beginner developers' knowledge on javascript concepts and records.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="https://github.com/mascarelloa/code-quiz" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="https://mascarelloa.github.io/code-quiz/" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                </ProjectsCard>

                <ProjectsCard>
                    <img src="https://tinyurl.com/ycafdxp6"/>
                    <ProjectsH2>
                       Password Generator
                    </ProjectsH2>
                    <ProjectsP>
                    An app that generates a secure, strong password based on user's selected conditions.
                    </ProjectsP>
                    <ButtonContainer>
                        <a href="https://github.com/mascarelloa/password-generator" target="_blank" type="button" className="project-button">Repo</a>
                        <a href="https://mascarelloa.github.io/password-generator/" target="_blank" type="button" className="project-button">Demo</a>
                    </ButtonContainer>
                </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

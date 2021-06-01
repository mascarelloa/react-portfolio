import React from "react";
import { SkillsContainer, SkillsH1, Bar, SkillsWrapper, SkillsColumn1, SkillsColumn2 } from "./Skills";
import "../../../src/App.css";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
          <SkillsH1>The tools<Bar /></SkillsH1>
          
          <SkillsWrapper>

          <SkillsColumn1>
        <section class="skills">
          <div class="skill-item">
            <p class="skill-title">HTML & CSS</p>
            <div class="progress">
              <div class="progess-bar progess-html"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">JavaScript</p>
            <div class="progress">
              <div class="progess-bar progess-js"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">MySQL & MongoDB</p>
            <div class="progress">
              <div class="progess-bar progess-sqlmongo"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">Node & Express</p>
            <div class="progress">
              <div class="progess-bar progess-nodeexp"></div>
            </div>
          </div>
        </section></SkillsColumn1>

        <SkillsColumn2>
        <section class="skills">
          <div class="skill-item">
            <p class="skill-title">React</p>
            <div class="progress">
              <div class="progess-bar progess-react"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">Bootstrap</p>
            <div class="progress">
              <div class="progess-bar progess-bs"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">Adobe Photoshop</p>
            <div class="progress">
              <div class="progess-bar progess-ps"></div>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-title">Adobe inDesign</p>
            <div class="progress">
              <div class="progess-bar progess-id"></div>
            </div>
          </div>
          
        </section>
        </SkillsColumn2> 
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;

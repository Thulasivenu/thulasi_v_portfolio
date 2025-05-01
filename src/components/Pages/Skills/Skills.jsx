import React from "react";
import NavBar from "../../Common/NavBar";
import "./Skills.css";

const Skills = () => {
  document.title = "Portfolio | Skills"

  return (
    <>
      <NavBar />
      <div className="skillsContainer">
        {/* <span className="corner top-left"></span> */}
        {/* <span className="corner top-right"></span> */}
        {/* <span className="corner bottom-left"></span> */}
        {/* <span className="corner bottom-right"></span> */}
        <div className="skillsTwoSection">
          <div className="firstTwoSkills">
            <div className="frontEnd backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Front-End Languages</h2>

              {/* first row: HTML5, CSS3, JavaScript */}
              <div className="firstRow skillsRow">
                <div className="skills">HTML5</div>
                <div className="skills">CSS3</div>
                <div className="skills">JavaScript</div>
              </div>

              {/* second row: React, Tailwind */}
              <div className="secondRow skillsRow">
                <div className="skills">React.js (JavaScript library)</div>
                <div className="skills">Tailwind (CSS Framework)</div>
              </div>
            </div>

            <div className="backend backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Back-End and Databases</h2>
              <div className="firstRow skillsRow">
                <div className="skills">MYSQL</div>
                <div className="skills" >PHP</div>
                <div className="skills">Nodejs</div>
              </div>

              <div className="secondRowBackend skillsRow">
                <div className="skills">Mongo DB</div>
                <div className="skills">Express</div>
              </div>
            </div>
            <div className="developerTools backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Developer Tools</h2>
              <div className="firstRow skillsRow">
                <div className="skills">Visual Studio</div>
              </div>
            </div>
          </div>
          <div className="secondThreeSkills">
            <div className="softSKills backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Soft Skills</h2>
              <div className="firstRow skillsRow">
                <div className="skills">Team Player</div>
                <div className="skills">Active listener</div>
                <div className="skills">Hard worker</div>
              </div>
            </div>
            <div className="technicalSKills backgroundGradient">
              <h2 className="headingss">
                <span className="borderLeft"></span>Technical Skills
              </h2>
              <div className="firstRow skillsRow">
                <div className="skills">Proficient knowledge of Scrum and Agile methodologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import NavBar from "../../Common/NavBar";
import "./Skills.css";

const Skills = () => {
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
                <div>HTML5</div>
                <div>CSS3</div>
                <div>JavaScript</div>
              </div>

              {/* second row: React, Tailwind */}
              <div className="secondRow skillsRow">
                <div>React.js (JavaScript library)</div>
                <div>Tailwind (CSS Framework)</div>
              </div>
            </div>

            <div className="backend backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Back-End and Databases</h2>
              <div className="firstRow skillsRow">
                <div>MYSQL</div>
                <div>PHP</div>
                <div>Nodejs</div>
              </div>

              <div className="secondRow skillsRow">
                <div>Mongo DB</div>
                <div>Express</div>
              </div>
            </div>
            <div className="developerTools backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Developer Tools</h2>
              <div className="firstRow skillsRow">
                <div>Visual Studio</div>
              </div>
            </div>
          </div>
          <div className="secondThreeSkills">
            <div className="softSKills backgroundGradient">
              <h2 className="headingss"><span className="borderLeft"></span>Soft Skills</h2>
              <div className="firstRow skillsRow">
                <div>Team Player</div>
                <div>Active listener</div>
                <div>Hard worker</div>
              </div>
            </div>
            <div className="technicalSKills backgroundGradient">
              <h2 className="headingss">
                <span className="borderLeft"></span>Technical Skills
              </h2>
              <div className="firstRow skillsRow">
                <div>Proficient knowledge of Scrum and Agile methodologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

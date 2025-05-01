import React from "react";
import NavBar from "../../Common/NavBar";
import "./About.css";

const About = () => {
  document.title = "Portfolio | About"

  return (
    <>
      <NavBar />
      <div className="aboutConatiner">
        {/* <span className="corner top-left"></span> */}
        {/* <span className="corner top-right"></span> */}
        {/* <span className="corner bottom-left"></span> */}
        {/* <span className="corner bottom-right"></span> */}
        {/* <h2 className="mobileView">About</h2> */}
        <div className="backgroundGradient aboutContainerSection">
          <div className="workexperience">
            <h2 className="headingss">
              <span className="borderLeft"></span>Work Experience
            </h2>
            <div className="contents">

            <p>Qualesce June-2022 to Ongoing</p>
            </div>
          </div>
          <div className="achievements">
            <h2 className="headingss">
              <span className="borderLeft"></span>Achievements

            </h2>
            <div className="contents">

            <strong>Extra Mile Award: </strong>

            <span>
              Received Extra Mile award from Qualesce in January 2024 among 100
              people.
            </span>
            </div>

          </div>
          <div className="eduaction">
            <h2 className="headingss">
              <span className="borderLeft"></span>Education
            </h2>
            <div className="contents">

            <span>CMR Institute of Technology 2021</span>
            <span> B.E (Civil Engineering)</span>
            <strong>CGPA: 7.0</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

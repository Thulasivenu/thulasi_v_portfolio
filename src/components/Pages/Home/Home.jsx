import React from "react";
import NavBar from "../../Common/NavBar";
import "./Home.css";
import phoneIcon from "../../../assets/images/phone.svg";
import mailIcon from "../../../assets/images/email.svg";
import linkedIn from "../../../assets/images/linkedin.svg";

const Home = () => {
  document.title = "Portfolio | Home";
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <span className="corner top-left"></span>

        <span className="corner bottom-right"></span>
        <div className="myIntro">
          <div className="welcome  ">Hi there,</div>
          <div className="gradientText"> I'm Thulasi V</div>

          <div className="objective">
            A Software Developer with
            <strong> 2.10 years of experience</strong>, primarily in front-end
            development, building dynamic UIs. I am skilled in performance
            optimization, API integration, and data visualizations, with some
            back-end development experience. I am dedicated to contributing to
            both team and organizational success.
          </div>
        </div>
        <div className="rightContent">
          <p className="heading">Contact Information:</p>
          <div className="myContact">

            <div className="contactItem">
              <a href="tel:+919945104768">
                <img src={phoneIcon} className="icon" alt="phone icon" />
                Phone
              </a>
            </div>

            <div className="contactItem">
              <a href="mailto:thulasivenu16@gmail.com">
                <img
                  src={mailIcon}
                  className="icon"
                  alt="mail icon"
                  target="_blank"
                />
                Mail
              </a>
            </div>

            <div className="contactItemLinkedin">
              <a
                href="https://www.linkedin.com/in/thulasi-v-4b9282186"
                target="_blank"
              >
                <img
                  src={linkedIn}
                  className="iconLinkedIn"
                  alt="linkedin icon"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

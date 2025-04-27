import React from "react";
import NavBar from "../../Common/NavBar";
import "./Home.css";
import phoneIcon from "../../../assets/images/phone.svg";
import mailIcon from "../../../assets/images/email.svg";
import linkedIn from "../../../assets/images/linkedin.svg";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <span className="corner top-left"></span>
        {/* <span className="corner top-right"></span> */}
        {/* <span className="corner bottom-left"></span> */}
        <span className="corner bottom-right"></span>
        <div className="myIntro">
          <div className="welcome gradientText ">Welcome,</div>
          <div className="objective">
            I'm <strong>Thulasi V</strong>, a Software Developer with
            <strong> 2.10 years of experience</strong>, primarily in front-end
            development, building dynamic UIs. I am skilled in performance
            optimization, API integration, and data visualizations, with some
            back-end development experience. I am dedicated to contributing to
            both team and organizational success.
          </div>
        </div>
        <div className="rightContent">
          <div className="myContact">
            <p className="heading">Contact Information:</p>
            {/* <h2 class="typewriter">Welcome to My Portfolio</h2> */}


            <div className="contactItem">
              <img src={phoneIcon} className="icon" alt="phone icon" />
              <a href="tel:+919945104768">+91 9945104768</a>
            </div>

            <div className="contactItem">
              <img src={mailIcon} className="icon" alt="mail icon" />
              <a href="mailto:thulasivenu16@gmail.com">
                thulasivenu16@gmail.com
              </a>
            </div>

            <div className="contactItem">
              <img src={linkedIn} className="icon" alt="linkedin icon" />
              <a href="https://www.linkedin.com/in/thulasi-v-4b9282186">
                https://www.linkedin.com/in/thulasi-v-4b9282186
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

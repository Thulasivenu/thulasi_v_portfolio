import React from "react";
import NavBar from "../../Common/NavBar";
import "./Projects.css";

const Project = () => {
  document.title = "Portfolio | Project"

  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", // <-- THIS will center it vertically
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="projectContainer">
       
        {/* <span className="corner top-left"></span> */}
        {/* <span className="corner top-right"></span> */}
        {/* <span className="corner bottom-left"></span> */}
        {/* <span className="corner bottom-right"></span> */}
        <div className="projectsContent">
          <div className="projectInfo backgroundGradient" id="hrbot">
            <p className="headingss">
              <span className="borderLeft"></span>HR BOT
            </p>
            <div className="techUsedProject">
              <p>React.js</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
              <p>Pinecone</p>
            </div>
            {/* <p>React.js, Node.js, Express.js, MongoDB, Pinecone</p> */}
            <ul>
              <li>
                The HR (Human Resource) Bot is an AI powered, designed to HR
                support using Retrieval-Augmented Generation (RAG). By using
                real time information with a GPT-based LLM
              </li>
              <li>
                Used Pinecone Database to store and manager documents, enabling
                eficient retrieval for API responses.
              </li>
              <li>
                Built an interactive user interface using React.js, Tailwind
                CSS, integrating APIs for real time retrieval.
              </li>
              <li>
                Handles authentication using JWT, Express.js and Node.js stored
                user information using MongoDB and developed RESTful APIs for
                user management and data operations
              </li>
            </ul>
          </div>
          <div className="projectInfo backgroundGradient" id="nustts">
            <p className="headingss">
              <span className="borderLeft"></span>NUS TTS
            </p>
            <div className="techUsedProject">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>MySQL</p>
              <p>PHP</p>
            </div>
            <p>
              The NUS Consulting Group's Trade Tracking System (TTS) for energy
              trading.
            </p>
            <ul>
              <li>
                Designed and implemented the front-end user interface for NUS
                TTS using HTML5, CSS3, JavaScript, and jQuery
              </li>
              <li>
                Utilized PHP for back-end development, fetched data from MySQL,
                and seamlessly integrated it into the front end.
              </li>
              <li>
                Implemented dynamic data visualization features using Google
                charts, customized chart’s styling and layouts to meet specific
                requirements for reports generations.
              </li>
              <li>
                Enhanced performance by optimizing JavaScript and jQuery code,
                reducing page load times.
              </li>
              <li>
                Implemented secure user authentication and role – based access
                control mechanisms to ensure the security of sensitive energy
                trading data.
              </li>
              <li>
                Ensured seamless user experience and compatibility across
                various browsers through rigorous testing and debugging eƯorts.
              </li>
            </ul>
          </div>
          <div className="projectInfo backgroundGradient" id="upma">
            <p className="headingss">
              <span className="borderLeft"></span>UPMA
            </p>
            <div className="techUsedProject">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>PHP</p>
            </div>
            <p>UiPath Mapping Assessment for automated process logs.</p>
            <ul>
              <li>
                Developed a web application for UPMA using HTML5, CSS3,
                JavaScript for the UI and PHP for back-end development.
              </li>
              <li>
                Converted UiPath's automated process logs from CSV to XML.
              </li>
              <li>
                Enhanced a web application for Process Intelligence's heat map
                analysis
              </li>
              <li>
                Optimized the web application’s performance by utilizing
                asynchronous JavaScript (AJAX) for dynamic content loading,
                reducing server load and improving user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

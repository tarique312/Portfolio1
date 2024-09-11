import React from "react";
import Button from "../components/Button";
import Indicator from "../components/Indicator";
import "./Projects.css";
import RandomScrollText from "../components/RandomText";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"PROJECTS"} />
        </div>
        <div className="main">
          <p>
            Over the past three years, I have developed a diverse portfolio of
            projects that showcase my expertise in{" "}
            <span>frontend and full stack development</span>. My work spans a
            variety of industries and applications, from dynamic web platforms
            to interactive user interfaces. Utilizing the <span>MERN stack and React</span>,
            I have built scalable solutions that focus on performance, security,
            and user experience. Each project reflects my commitment to clean
            code, innovative design, and seamless functionality. Through these
            experiences, I have honed my ability to tackle complex challenges
            and deliver impactful results.
          </p>
        </div>
        <Link to="/myprojects">
          <Button text="View my work" />
        </Link>
      </div>
      <Indicator />
    </div>
  );
};

export default Projects;

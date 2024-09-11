import React from "react";
import Indicator from "../components/Indicator";
import RandomScrollText from "../components/RandomText";
import "./AboutMe.css";
import ProgressBarComponent from "../components/ProgressBar";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"ABOUT ME"} />
        </div>
        <div className="content">
          <div className="main-about">
            <p className="one">Experience</p>
            <p className="two">Jan, 2024 - Present</p>
            <p className="two">UID Lecturer</p>
            <p className="two">ICAT Design and Media College</p>
          </div>
          <hr />
          <div className="main-about">
            <p className="two">Jan, 2022 - Jan, 2024</p>
            <p className="two">Python Analyst</p>
            <p className="two">STU BIZ solutions pvt. ltd.</p>
          </div>
          <hr />
          <div className="main-about">
            <p className="one">Education</p>
            <p className="two">B.Sc. (2018 - 2021)</p>
            <p className="two">Patliputra University, Patna, Bihar</p>
          </div>
          <hr />
          <div className="main-about">
            <p className="one">Skills</p>
            <p className="four">React</p>
            <ProgressBarComponent progress={0.7} />
            <p className="four">MERN Stack</p>
            <ProgressBarComponent progress={0.6} />
            <p className="four">JavaScript</p>
            <ProgressBarComponent progress={0.7} />
            <p className="four">HTML & CSS</p>
            <ProgressBarComponent progress={0.9} />
            <p className="four">React Native</p>
            <ProgressBarComponent progress={0.6} />
            <p className="four">SCSS</p>
            <ProgressBarComponent progress={0.7} />
            <p className="four">Python</p>
            <ProgressBarComponent progress={0.7} />
          </div>
        </div>
      </div>
      <Indicator />
    </div>
  );
};

export default AboutMe;

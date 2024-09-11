import Button from "../components/Button";
import Indicator from "../components/Indicator";
import RandomScrollText from "../components/RandomText";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"ABOUT"} />
        </div>
        <div className="main">
          <p>
          I am a Full Stack Developer with 3+ years of experience specializing in the MERN stack and React. My expertise spans JavaScript, Node.js, Express.js, HTML, CSS, and more, allowing me to design and deploy scalable, efficient web applications. I’m passionate about creating user-focused solutions and thrive in collaborative environments that embrace innovation. Always eager to learn and adapt, I’m looking to contribute to impactful projects and drive digital transformation.
          </p>
        </div>
        <Link to="/aboutme">
          <Button text="View more" />
        </Link>
      </div>
      <Indicator />
    </div>
  );
};

export default About;

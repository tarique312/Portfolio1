import Indicator from "../components/Indicator";
import "./Home.css";
import RandomScrollText from "../components/RandomText";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"PORTFOLIO"} />
        </div>
        <div className="main">
          <h1>Md</h1>
          <h1>Tarique</h1>
        </div>
        <div className="sub-main">Full Stack Web Developer</div>
      </div>
      <Indicator />
    </div>
  );
};

export default Home;

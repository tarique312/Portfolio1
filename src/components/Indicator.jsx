import React, { useContext } from "react";
import PortfolioContext from "../store/PortfolioStore";
import "./Indicator.css";
import { Link } from "react-router-dom";

const Indicator = () => {
  const { tab, setTab } = useContext(PortfolioContext);

  return (
    <div className="indicator">
      <Link
        to="/"
        className={`disc ${tab === "Home" ? "active" : ""}`}
        onClick={() => {
          setTab("Home");
        }}
      ></Link>
      <Link
      to="/about"
        className={`disc ${tab === "About" ? "active" : ""}`}
        onClick={() => {
          setTab("About");
          console.log(tab);
        }}
      ></Link>
      <Link
      to="/projects"
        className={`disc ${tab === "Projects" ? "active" : ""}`}
        onClick={() => {
          setTab("Projects");
          console.log(tab);
        }}
      ></Link>
      <Link
      to="/contact"
        className={`disc ${tab === "Contact" ? "active" : ""}`}
        onClick={() => {
          setTab("Contact");
          console.log(tab);
        }}
      ></Link>
    </div>
  );
};

export default Indicator;

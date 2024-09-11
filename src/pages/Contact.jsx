import Indicator from "../components/Indicator";
import RandomScrollText from "../components/RandomText";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="scroll">
          The web is my canvas, and code is how I bring ideas to life.
        </div>
        <div className="heading" id="contact-title">
          <RandomScrollText text={"CONTACT ME"} />
        </div>
        <div className="contact-detail">
          <p>
            <img src="./images/Vector.svg" alt="Phone" />
            +917064361199
          </p>
          <p>
            <img src="./images/Email.svg" alt="Email" />
            tariquemdofficial@gmail.com
          </p>
          <p>
            <img src="./images/Location.svg" alt="Location" />
            Sri Maha Gents Hostel, Ramkrishna Mutt Road, Mylapore,
            Chennai-600004
          </p>
          <p id="bottom">
            <a
              href="mailto:tariquemdofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Email.svg" alt="Gmail" />
            </a>
            <a
              href="https://www.instagram.com/tarique_312"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-tarique-70b229264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://wa.me/+917064361199?text=Hello!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/WhatsApp.svg" alt="WhatsApp" />
            </a>
            <a
              href="https://www.github.com/tarique312"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/github.svg" alt="GitHub" />
            </a>
          </p>
        </div>
      </div>
      <Indicator />
    </div>
  );
};

export default Contact;

import "./ProjectCard.css";
import topTransition from "./topTransition";

const ProjectCard = ({ proj }) => {
  return (
    <div className="card">
      <img src={proj.img} alt="project image" />
      <div className="text">
        <span className="type">{proj.projectType}</span>
        <span className="title">{proj.projectTitle}</span>
      </div>
      <p>
        <a href={`${proj.FigmaURL}`}>
          <button>View Project</button>
        </a>
      </p>
    </div>
  );
};

export default topTransition(ProjectCard);

import Line from "../components/Line";
import ProjectCard from "../components/ProjectCard";
import "./MyProjects.css";

const MyProjects = () => {
  const projectArray = [
    {
      img: "images/Figma-img.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&starting-point-node-id=1%3A24&t=jUGKApygm0yq20ob-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
    {
      img: "images/Figma-img.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&starting-point-node-id=1%3A24&t=jUGKApygm0yq20ob-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
    {
      img: "images/Figma-img.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&starting-point-node-id=1%3A24&t=jUGKApygm0yq20ob-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
    {
      img: "images/Figma-img.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&starting-point-node-id=1%3A24&t=jUGKApygm0yq20ob-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
    {
      img: "images/Figma-img.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&starting-point-node-id=1%3A24&t=jUGKApygm0yq20ob-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
  ];
  return (
    <>
      <div className="box left">
        {projectArray.map((proj) => (
          <ProjectCard proj={proj} />
        ))}
      </div>
    </>
  );
};

export default MyProjects;

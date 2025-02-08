import Card from "../card/Card";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Omnifood Project",
      description:
        "Omnifood is a premium food delivery service that was built using HTML, CSS, and JavaScript. The project alsi incorporates modern web development practices such as responsive web design ang CSS Flexbox/Grid for Layout",
      link: "link",
      image: "image",
    },
    {
      title: "Weather App",
      description: "description",
      link: "link",
      image: "image",
    },
    {
      title: "React App",
      description: "description",
      link: "link",
      image: "image",
    },
  ];
  return (
    <div>
      <section className="projects" id="Projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-container container">
          {projects.map((project, index) => (
            <Card key={index} projects={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

import Card from "../card/Card";
import "./Projects.css";
import omnifoodImage from "../../assets/img/Omnifood-project.png";
import weatherAppImage from "../../assets/img/Weather-app.jpg";
import blogAppImage from "../../assets/img/Blog-app.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Omnifood Project",
      description:
        "Omnifood is a premium food delivery service built with HTML, CSS, and JavaScript, utilizing modern web practices like responsive design and CSS Flexbox/Grid for layout.",
      link: "https://omnifood-katerina818.netlify.app/",
      image: omnifoodImage,
    },
    {
      title: "Weather App",
      description:
        "A user-friendly React app that uses a public API to show real-time weather updates and lets you know if you should bring an umbrella.",
      link: "https://github.com/kati818/weather-app",
      image: weatherAppImage,
    },
    {
      title: "Blog App",
      description:
        "A simple and easy-to-use blog app that lets you create posts, built with Node.js, Express.js, and EJS for smooth content management and display.",
      link: "https://blog-app-1pp2.onrender.com/",
      image: blogAppImage,
    },
  ];
  return (
    <div>
      <section className="projects" id="Projects">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-container container">
          {projects.map((project, index) => (
            <Card key={index} projects={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

import "../skills/Skills.css";
import Skills from "../skills/Skills";

export default function ProgrammingSkills() {
  const backendIcons = [
    { src: "img/java-icon.svg", alt: "Java icon" },
    { src: "img/npm-icon.svg", alt: "NPM icon" },
    { src: "img/nodejs-icon.svg", alt: "NodeJS icon" },
    { src: "img/ejs-icon.svg", alt: "EJS icon" },
  ];

  const frontendIcons = [
    { src: "img/html-icon.svg", alt: "HTML icon" },
    { src: "img/css-icon.svg", alt: "CSS icon" },
    { src: "img/js-icon.svg", alt: "JavaScript icon" },
    { src: "img/react-icon.svg", alt: "React icon" },
  ];

  const toolIcons = [
    { src: "img/github-icon.svg", alt: "github icon" },
    { src: "img/mysql-iconsvg.svg", alt: "MySQL icon" },
    { src: "img/netlify-icon.svg", alt: "Netlify icon" },
    { src: "img/postman-icon.svg", alt: "Postman icon" },
    { src: "img/vscode.svg", alt: "VSCode icon" },
  ];

  return (
    <div>
      <section className="skills" id="Skills">
        <div className="skills-text-container">
          <h2 className="skills-heading">Hard skills</h2>
          <p className="programming-skills-text">
            I have been studying web development for several years, starting my
            programming journey with a strong emphasis on backend development.
            Following that, I expanded my expertise to front-end technologies
            with the goal of becoming a proficient full-stack developer.
          </p>
        </div>
        <div>
          <Skills heading="Backend" icons={backendIcons} className="backend" />
          <Skills
            heading="Frontend"
            icons={frontendIcons}
            className="frontend"
          />
          <Skills heading="Tools" icons={toolIcons} className="tools" />
        </div>
      </section>
    </div>
  );
}

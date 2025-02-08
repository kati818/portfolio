import "../skills/Skills.css";
import Skills from "../skills/Skills";
import javaIcon from "../../assets/img/java-icon.svg";
import npmIcon from "../../assets/img/npm-icon.svg";
import nodeJsIcon from "../../assets/img/nodejs-icon.svg";
import ejsIcon from "../../assets/img/ejs-icon.svg";
import htmlIcon from "../../assets/img/html-icon.svg";
import cssIcon from "../../assets/img/css-icon.svg";
import jsIcon from "../../assets/img/js-icon.svg";
import Reacticon from "../../assets/img/react-icon.svg";
import gitIcon from "../../assets/img/github-icon.svg";
import mySqlIcon from "../../assets/img/mysql-iconsvg.svg";
import netlify from "../../assets/img/netlify-icon.svg";
import postmanIcon from "../../assets/img/postman-icon.svg";
import vsCodeIcon from "../../assets/img/vscode.svg";
import AnimatedText from "../animatedtext/AnimatedText";

export default function ProgrammingSkills() {
  const backendIcons = [
    { src: javaIcon, alt: "Java icon" },
    { src: npmIcon, alt: "NPM icon" },
    { src: nodeJsIcon, alt: "NodeJS icon" },
    { src: ejsIcon, alt: "EJS icon" },
  ];

  const frontendIcons = [
    { src: htmlIcon, alt: "HTML icon" },
    { src: cssIcon, alt: "CSS icon" },
    { src: jsIcon, alt: "JavaScript icon" },
    { src: Reacticon, alt: "React icon" },
  ];

  const toolIcons = [
    { src: gitIcon, alt: "github icon" },
    { src: mySqlIcon, alt: "MySQL icon" },
    { src: netlify, alt: "Netlify icon" },
    { src: postmanIcon, alt: "Postman icon" },
    { src: vsCodeIcon, alt: "VSCode icon" },
  ];

  return (
    <div>
      <section className="skills" id="Skills">
        <div className="skills-text-container">
          <h2 className="skills-heading">Hard skills</h2>
          <AnimatedText className="programming-skills-text">
            <p>
              I have been studying web development for several years, starting
              my programming journey with a strong emphasis on backend
              development. Following that, I expanded my expertise to front-end
              technologies with the goal of becoming a proficient full-stack
              developer.
            </p>
          </AnimatedText>
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

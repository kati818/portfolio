import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import "../icon/Icon.css";
import "./Skills.css";
import Language from "../language/Language";
import CommunicationSkill from "../communicationskills/CommunicationSkill";

export default function Skills({ heading, icons }) {
  return (
    <div className="skills-section">
      <div>
        <h2 className="skills-heading">{heading}</h2>
      </div>

      <ul className="tools-icons">
        {icons.map((icon, index) => (
          <Icon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </ul>
    </div>
  );
}

export function LanguageSection({ heading, languages }) {
  return (
    <div className="languages">
      <h2 className="language-heading">{heading}</h2>
      <ul>
        {languages.map((lang, index) => (
          <Language
            key={index}
            lang={lang.lang}
            proficiency={lang.proficiency}
          />
        ))}
      </ul>
    </div>
  );
}

export function SoftSkillSection({ heading, skills }) {
  return (
    <div className="softskills">
      <h3 className="skill-heading">{heading}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <CommunicationSkill key={index} skill={skill.skill} />
        ))}
      </ul>
    </div>
  );
}

Skills.propTypes = {
  heading: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Skills.defaultProps = {
  icons: [],
};

LanguageSection.propTypes = {
  heading: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      lang: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SoftSkillSection.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
    })
  ).isRequired,
};

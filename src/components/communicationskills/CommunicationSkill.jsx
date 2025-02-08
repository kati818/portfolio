import PropTypes from "prop-types";
import "./CommunicationSkill.css";

export default function CommunicationSkill({ skill }) {
  return <li className="skill">{skill}</li>;
}

CommunicationSkill.propTypes = {
  skill: PropTypes.string.isRequired,
};

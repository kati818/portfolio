import PropTypes from "prop-types";
import "./Language.css";

export default function Language({ lang, proficiency }) {
  return (
    <li className="language">
      {lang}/{proficiency}
    </li>
  );
}

Language.propTypes = {
  lang: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired,
};

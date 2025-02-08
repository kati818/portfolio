import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ projects }) {
  return (
    <div className="card">
      <div className="card-img">
        <div className="overlay">
          <div className="overlay-content"></div>
        </div>
      </div>
      <div className="card-content">
        <h2>{projects.title}</h2>
        <p>{projects.description}</p>
        <span>{projects.link}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

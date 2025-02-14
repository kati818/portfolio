import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ projects }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={projects.image} alt={projects.title} />
      </div>
      <div className="card-content">
        <h2>{projects.title}</h2>
        <p>{projects.description}</p>
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="show-more-link"
        >
          Show more
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

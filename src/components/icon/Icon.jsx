import "./Icon.css";
import PropTypes from "prop-types";

export default function Icon({ src, alt }) {
  return <img className="icon" src={src} alt={alt} />;
}

export function SocialMediaIcon() {}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

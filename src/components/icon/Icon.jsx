import "./Icon.css";
import PropTypes from "prop-types";
import * as motion from "motion/react-client";

export default function Icon({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      <img className="icon" src={src} alt={alt} />
    </motion.div>
  );
}

export function SocialMediaIcon() {}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

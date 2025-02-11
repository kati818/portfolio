import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import "../icon/Icon.css";
import "./HardSkills.css";

import { List, Box } from "@mui/material";

export default function Skills({ heading, icons }) {
  return (
    <div className="skills-section">
      <Box className="skills-heading-box">
        <h2 className="skills-heading">{heading}</h2>
      </Box>
      <List className="tools-icons">
        {icons.map((icon, index) => (
          <Icon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </List>
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

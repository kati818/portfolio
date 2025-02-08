import { IonIcon } from "@ionic/react";
import PropTypes from "prop-types";

const SocialLink = ({ href, icon, className }) => (
  <li>
    <a href={href}>
      <IonIcon className={className} icon={icon} />
    </a>
  </li>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SocialLink.defaultProps = {
  className: "",
};

export default SocialLink;

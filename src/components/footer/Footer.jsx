import { logoLinkedin, logoGithub, mailOutline } from "ionicons/icons";
import "./Footer.css";
import SocialLink from "../sociallink/SocialLink";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ekaterina-belikova-895992326/",
      icon: logoLinkedin,
    },
    { href: "https://www.github.com/", icon: logoGithub },
    { href: "https://www.gmail.com/", icon: mailOutline },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="grid-container--footer container">
        <p className="year">
          <span id="year">
            {" "}
            &#169; {year} Ekaterina Belikova | All rights reserved.
          </span>
        </p>
        <ul className="contact-info">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              icon={link.icon}
              className="footer-icon"
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

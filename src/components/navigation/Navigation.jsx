import "./Navigation.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationList = [
    { id: 1, title: "Home", href: "home" },
    {
      id: 2,
      title: "About",
      href: "about",
    },
    {
      id: 3,
      title: "Skills",
      href: "skills",
    },
    {
      id: 4,
      title: "Projects",
      href: "projects",
    },
  ];

  return (
    <div>
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <nav className="main-nav">
          <ul className="main-nav-list">
            {navigationList.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  to={navItem.href}
                  smooth={true}
                  duration={500}
                  className="main-nav-link"
                  offset={-50}
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
            <button className="email-button">
              <a
                href="mailto:katerina.belikova818@gmail.com"
                className="mailto-link"
              >
                Contact me
              </a>
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

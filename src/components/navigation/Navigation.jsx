import { useState, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navigation() {
  const navigationList = [
    { id: 1, title: "Home", href: "home" },
    { id: 2, title: "About", href: "about" },
    { id: 3, title: "Skills", href: "skills" },
    { id: 4, title: "Projects", href: "projects" },
  ];
  const isMobileSize = useMediaQuery("(min-width:900px)");
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600);

  function toggleDrawer(open) {
    setDrawerOpen(open);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`main-nav ${isSticky ? "sticky" : ""}`}>
      {/* Show hamburger menu only on small screens */}
      {!isMobileSize && (
        <IconButton onClick={() => toggleDrawer(true)} className="menu-button">
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
      {/* Drawer - Sliding Menu for small screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box className="drawer-container">
          {/* Close Button */}
          <IconButton
            onClick={() => toggleDrawer(false)}
            className="close-button"
          >
            <CloseIcon />
          </IconButton>

          {/* Menu Items */}
          <List className="drawer-list">
            {navigationList.map((navItem) => (
              <ListItem
                button
                key={navItem.id}
                onClick={() => toggleDrawer(false)}
              >
                <Link
                  to={navItem.href}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="drawer-link"
                >
                  <ListItemText primary={navItem.title} />
                </Link>
              </ListItem>
            ))}
          </List>

          {/* Contact Me Button inside the Drawer */}
          <Button
            className="drawer-contact-button"
            variant="contained"
            color="primary"
            href="mailto:katerina.belikova818@gmail.com"
          >
            Contact Me
          </Button>
        </Box>
      </Drawer>
      {/* Show full menu on large screens */}
      {isMobileSize && (
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
          {/* Contact Me Button for Larger Screens */}
          <Button
            className="contact-button"
            variant="contained"
            color="primary"
            href="mailto:katerina.belikova818@gmail.com"
          >
            Contact Me
          </Button>
        </ul>
      )}
    </nav>
  );
}

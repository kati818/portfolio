// import { useState } from "react";
import "./App.css";
import Home from "../home/Home.jsx";
import Navigation from "../navigation/Navigation.jsx";
import Avatar from "../avatar/Avatar.jsx";
import About from "../about/About.jsx";
import ProgrammingSkills from "../skills/ProgrammingSkills.jsx";
import SoftSkills from "../skills/SoftSkills.jsx";
import Projects from "../projects/Projects.jsx";
import Footer from "../footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section>
        <Avatar />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <ProgrammingSkills />
        <SoftSkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

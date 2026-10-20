import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Project";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Education />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;
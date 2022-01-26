import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Four0Four from "./components/Four0Four";
import Projects from "./components/About";

const theme = {
  color: {
    primary: "",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Four0Four />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

require("./style/initialization.css");

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;

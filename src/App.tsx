import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

require("./style/initialization.css");

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;

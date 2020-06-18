import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

require("./style/initialization.css");

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;

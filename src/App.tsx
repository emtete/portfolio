import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

require("./style/initialization.css");

class App extends React.Component {
  private sec_homeRef = React.createRef<Home>();

  componentDidMount() {
    console.log(this.sec_homeRef.current?.getHomePosition());
    console.log(this.sec_homeRef.current?.getNavItems());
  }
  render() {
    return (
      <div>
        <Home ref={this.sec_homeRef} />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;

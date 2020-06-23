import React from "react";

require("../style/project.css");

interface iProps {
  [key: string]: string;
  img: string;
}
class Project extends React.Component<iProps> {
  render() {
    return (
      <div className='work__img__one_set'>
        <img src={this.props.img} alt='' className='work__img' />
      </div>
    );
  }
}

export default Project;

import React from "react";
import "../style/project.scss";

interface iProps {
  [key: string]: string;
  img: string;
}
class Project extends React.Component<iProps> {
  render() {
    return (
      <div className='work__img-wrap'>
        <img src={this.props.img} alt='' className='work__img' />
      </div>
    );
  }
}

export default Project;

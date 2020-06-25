import React from "react";
import "../style/project.scss";

interface iProps {
  [key: string]: string;
  img: string;
  dataType: string;
}
class Project extends React.Component<iProps> {
  render() {
    const { dataType, img } = this.props;
    return (
      <div className='project' data-type={dataType}>
        <img src={img} alt='' className='project__img' />
      </div>
    );
  }
}

export default Project;

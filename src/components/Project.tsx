import React from "react";
import Modal from "./Modal";
import "../style/project.scss";

interface iProps {
  [key: string]: string;
  img: string;
  dataType: string;
  name: string;
}

class Project extends React.Component<iProps> {
  componentDidMount() {}

  render() {
    const { dataType, img, name } = this.props;
    return (
      <div className={`project ${name}`} data-type={dataType}>
        <img src={img} alt='' className={`project__img ${name}`} />
      </div>
    );
  }
}

export default Project;

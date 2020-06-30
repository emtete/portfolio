import React from "react";
import Modal from "./Modal";
import "../style/project.scss";

interface iProps {
  [key: string]: string;
  img: string;
  dataType: string;
  clasName: string;
  title: string;
  value: string;
}

class Project extends React.Component<iProps> {
  componentDidMount() {}

  render() {
    const { dataType, img, clasName, title, value } = this.props;
    return (
      <div className={`project ${clasName}`} data-type={dataType}>
        <img src={img} alt='' className={`project__img ${clasName}`} />
        <div className={`project__description ${clasName}`}>
          <h3>{title}</h3>
          <br />
          <span>{value}</span>
        </div>
      </div>
    );
  }
}

export default Project;

import React from "react";
import Modal from "./Modal";
import "../style/project.scss";

interface iProps {
  [key: string]: string;
  img: string;
  dataType: string;
  title: string;
}

class Project extends React.Component<iProps> {
  componentDidMount() {}

  render() {
    const { dataType, img } = this.props;
    return (
      <div className='project' data-type={dataType}>
        <img src={img} alt='' className='project__img' />
        {/* <Modal ref={this.modalRef} /> */}
      </div>
    );
  }
}

export default Project;

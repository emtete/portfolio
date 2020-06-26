import React from "react";
import { render } from "react-dom";
import "../style/modal.scss";

class Modal extends React.Component<{}, {}> {
  render() {
    return <div className='modal' id='modal'></div>;
  }
}

export default Modal;

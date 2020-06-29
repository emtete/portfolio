import React from "react";
import "../style/modal.scss";

class Modal extends React.Component<{}, {}> {
  render() {
    return (
      <div className='modal'>
        {/* Modal content */}
        <div className='modal__content'>
          <div className='modal__header'>
            <span className='close'>&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className='modal__body'>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className='modal__footer'>
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

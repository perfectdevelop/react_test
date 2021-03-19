import React from 'react';
import './Modal.css';

// type ModalProps = {
//   onCloseButtonClick: () => void;
// };

// function Modal(props: ModalProps) {
//   const { onCloseButtonClick } = props;
class Modal extends React.Component{
  render(){
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" >
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        This is my new modal!
      </div>
    </div>
  );
}
}

export default Modal;
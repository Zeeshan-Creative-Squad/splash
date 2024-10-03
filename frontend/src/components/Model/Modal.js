import React, { useEffect, useRef } from "react";
import "./Modal.css"; // Ensure your CSS file path is correct


export default function Modal(props) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (props.status) {
      document.body.classList.add('active-modal');
      modalRef.current.style.opacity = "1";
      modalRef.current.style.visibility = "visible";
    } else {
      document.body.classList.remove('active-modal');
      modalRef.current.style.opacity = "0";
      modalRef.current.style.visibility = "hidden";
    }
  }, [props.status]);

  return (
    <div className={`modal-container ${props.status ? 'show' : ''}`} ref={modalRef}
    onClick={props.closeModal}>
     
      <div className="overlay" onClick={props.closeModal}></div>
      {
        props.closeModal &&
        <div className="close-modal" onClick={props.closeModal}>
          <img src="/images/icons/cross-icon.png" alt="cross-icon" className="login-cross-icon d-none d-lg-flex img-fluid" />
        </div>
      }
      <div className="modal-main">
        
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

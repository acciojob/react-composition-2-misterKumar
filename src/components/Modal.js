import React from 'react';

const Modal = ({ show, onClose, children }) => {
  const handleModalClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('model-overlay')) {
      handleModalClose();
    }
  };

  return (
    show && (
      <div className="model-overlay" onClick={handleOverlayClick}>
       
          <button className="model-close" onClick={handleModalClose}>
            Close
          </button>
          <div className="modal-content">
            {children}
          </div>
      
      </div>
    )
  );
};

export default Modal;

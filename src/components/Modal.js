import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className="model-overlay">
      <div className="modal-dialog">
        <button className="model-close" onClick={handleModalClose}>
          Close
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

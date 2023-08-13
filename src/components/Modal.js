
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalOverlay = document.querySelector('.model-overlay');
      if (modalOverlay && !modalOverlay.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [show, onClose]);

  return (
    <>
      {show && (
        <div className="model-overlay">
          <div className="model-content">
            {children}
            <button className="model-close" onClick={onClose}>
              Close
            </button>
            <p className="model-p">This is the content of the modal.</p>
            
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

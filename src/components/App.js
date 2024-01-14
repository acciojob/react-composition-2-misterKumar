import React, { useState, useRef, useEffect } from "react";
import "./../styles/App.css";
 
const Modal = ({ show, onClose }) => {
  const modalRef = useRef();
 
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
 
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
 
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);
 
  if (!show) {
    return null;
  }
 
  return (
    <div className="model-overlay model" ref={modalRef} style={{ border: "2px solid black" }}>
      <button className="model-close" onClick={onClose}>
        Close
      </button>
      <p className="modal-p">This is the content of the modal.</p>
    </div>
  );
};
 
const App = () => {
  const [show, setShow] = useState(false);
 
  const handleClose = () => {
    setShow(false);
  };
 
  return (
    <div>
      <button className="show" onClick={() => setShow(true)}>
        Show Modal
      </button>
      {show && <Modal show={show} onClose={handleClose} />}
      {/* Do not remove the main div */}
    </div>
  );
};
 
export default App;
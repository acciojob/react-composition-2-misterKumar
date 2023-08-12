import React, { useState } from 'react';
import Modal from './Modal';
import "../styles/App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button className="btn" onClick={handleModalToggle}>Show Modal</button>
      <Modal show={isModalOpen} onClose={handleModalToggle}>
        <p className="model-p">This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;



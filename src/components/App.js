
import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/App.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="app">
      <button  className="btn" onClick={openModal}>Open Modal</button>
      <Modal show={modalVisible} onClose={closeModal}>
       
      </Modal>
    </div>
  );
}

export default App;

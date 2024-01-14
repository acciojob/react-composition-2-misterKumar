
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";


const App = () => {

  let[show,setShow]=useState(false)

  const displayModal=()=>{

    setShow(true)
  }


  const onClose=()=>{

    setShow(false)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={displayModal}>Show Modal</button>
        { show ?
        <Modal show={show} onClose={onClose}/>
        : ""
        }
    </div>
  )
}

export default App
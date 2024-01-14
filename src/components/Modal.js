import React,{useState} from "react";



const Modal=({onClose,show})=>{



    return(
    <div onClick={onClose} className="full">
    { show== true ?
            <div className="model-overlay">
                 <button className="model-close" onClick={onClose}>Close</button>
                 <div className="model">
                 <p className="model-p">This is the content of the modal.</p>
                 </div>

        </div> : "" }
        </div>
    )
}
export default Modal;
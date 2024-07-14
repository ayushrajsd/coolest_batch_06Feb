import './Modal.css'
function Modal({isVisible,hide}){
    if(!isVisible) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h1>Modal</h1>
                <button onClick={hide}>Close</button>
            </div>
        </div>
    )
}

export default Modal;
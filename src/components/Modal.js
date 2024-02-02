import './Modal.css';

const Modal = ({show, toggle, handleClick, message}) => {
    return(
        <div className="modal" style={{display: show}}>
            <div className='modal-content'>
                <button className="close-modal" onClick={toggle}>x</button>
                <div className="modal-message">{message}</div>
                <button onClick={handleClick} className="confirm-btn">Confirm</button>
            </div>
        </div>
    )
}

export default Modal;
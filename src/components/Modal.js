import Button from "./Button";

// import classes from "./Modal.module.css";

function Modal(props) {
  let modalMessage = "";

  if (props.errorState === 0) {
    return null;
  } else if (props.errorState === 1) {
    modalMessage =
      "Enter a valid username and age. Please do it right next time.";
  } else if (props.errorState === 2) {
    modalMessage =
      "Please provide a valid age greater than zero in order to join user club.";
  }

  return (
    <div className="container">
      <div className="modal-container">
        <header className="modal-header">Invalid Input</header>
        <div className="modal-body">
          <div className="modal-text">{modalMessage}</div>
        </div>
        <div className="modal-footer">
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </div>
      <div className="modal-background" onClick={props.onClose}></div>
    </div>
  );
}

export default Modal;

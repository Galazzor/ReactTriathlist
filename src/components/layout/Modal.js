function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

  return (
    <div className="delete-Account-Card">
      <p>Are you sure?</p>
      <button className="btn btn-modal-profile" onClick={cancelHandler}>Cancel</button>
      <button className="btn btn-modal-profile" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;

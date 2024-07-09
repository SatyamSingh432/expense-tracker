import ReactModal from "react-modal";
import Input from "./Input";
import "./AddModal.css";
const AddModal = (props) => {
  return (
    <ReactModal
      isOpen={props.modalOpen}
      //   shouldCloseOnOverlayClick={props.data}
      onRequestClose={props.data}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.77)",
        },
        content: {
          position: "absolute",
          top: "30vh",
          left: "28vw",
          right: "29vw",
          bottom: "48vh",
          border: "none",
          background: "rgba(239, 239, 239, 0.85)",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          borderRadius: "15px",
        },
      }}
    >
      <div className="modal-Add">
        <Input myPlaceHolder="Add Amount" />
        <button className="modal-add-btn1">Add Amount</button>
        <button className="modal-cancel-btn1" onClick={props.data}>
          Cancel
        </button>
      </div>
      <h1>Add Balance</h1>
    </ReactModal>
  );
};
export default AddModal;

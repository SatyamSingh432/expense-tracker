import ReactModal from "react-modal";
import "./Modal.css";
import Input from "./Input";
const Modal = (props) => {
  return (
    <ReactModal
      isOpen={props.modalOpen}
      shouldCloseOnOverlayClick={props.data}
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
          top: "29vh",
          left: "28vw",
          right: "29vw",
          bottom: "25vh",
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
      <div className="modal">
        <Input myPlaceHolder="Title" />
        <Input myPlaceHolder="Price" />
        <Input myPlaceHolder="Select Country" />
        <Input myPlaceHolder="dd/mm/yyyy" />
        <button className="modal-add-btn">Add Button</button>
        <button className="modal-cancel-btn" onClick={props.data}>
          Cancel
        </button>
      </div>
      <h1>{props.name}</h1>
    </ReactModal>
  );
};
export default Modal;

import React from "react";
import "./AddButton.css";
const AddButton = (props) => {
  return (
    <button
      className="addButton"
      style={{ background: props.data.color }}
      onClick={props.modal}
    >
      {props.data.buttonText}
    </button>
  );
};
export default AddButton;

import React from "react";
import "./AddButton.css";
const AddButton = (props) => {
  return (
    <button className="addButton" style={{ background: props.data.color }}>
      +Add Expense
    </button>
  );
};
export default AddButton;

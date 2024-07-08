import React from "react";
import AddButton from "./AddButton";
import "./AddBox.css";
const AddBox = (props) => {
  return (
    <div className="addBox">
      <div>
        {props.content}
        <span style={{ color: props.txtColor }}>{`₹${props.amount}`}</span>
      </div>
      <AddButton data={props} />
    </div>
  );
};
export default AddBox;

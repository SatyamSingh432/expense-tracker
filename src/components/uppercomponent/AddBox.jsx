import React from "react";
import AddButton from "./AddButton";
import "./AddBox.css";
const AddBox = (props) => {
  // console.log(props);
  return (
    <div className="addBox">
      <div>
        {props.content}
        <span style={{ color: props.txtColor }}>{`₹${props.amount}`}</span>
      </div>
      <AddButton data={props} modal={props.data} />
    </div>
  );
};
export default AddBox;

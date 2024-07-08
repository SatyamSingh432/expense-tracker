import React from "react";
import "./Indicators.css";
const Indicator = () => {
  return (
    <div className="indicator">
      <div className="indi">
        <div className="box1"></div>
        <div>Food</div>
      </div>
      <div className="indi">
        <div className="box2"></div>
        <div>Entertainment</div>
      </div>
      <div className="indi">
        <div className="box3"></div>
        <div>Travel</div>
      </div>
    </div>
  );
};
export default Indicator;

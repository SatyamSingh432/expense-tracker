import IconButton from "./IconButton";
import iconCross from "./iconcross.png";
import iconedit from "./iconedit.png";

import "./RightTransactionComp.css";
const RightTransactionComp = (props) => {
  return (
    <div className="rightTransactionComp">
      <p>₹{props.data.price}</p>
      <div className="rightTransactionComp-button">
        <IconButton img={iconCross} />
        <IconButton img={iconedit} />
      </div>
    </div>
  );
};
export default RightTransactionComp;

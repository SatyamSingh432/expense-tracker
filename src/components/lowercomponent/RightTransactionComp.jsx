import IconButton from "./IconButton";
import iconCross from "./iconcross.png";
import iconedit from "./iconedit.png";

import "./RightTransactionComp.css";
const RightTransactionComp = () => {
  return (
    <div className="rightTransactionComp">
      <p>150</p>
      <div className="rightTransactionComp-button">
        <IconButton img={iconCross} />
        <IconButton img={iconedit} />
      </div>
    </div>
  );
};
export default RightTransactionComp;

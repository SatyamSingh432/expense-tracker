import { PiPizzaDuotone } from "react-icons/pi";
import "./LeftTransitionComp.css";
const LeftTransitionComp = () => {
  return (
    <div className="leftTransitionComp">
      <div className="leftTransitionComp-icon">
        <PiPizzaDuotone size={32} />
      </div>
      <div className="leftTransitionCompChild">
        <p>Samosa</p>
        <div>March 20, 2024</div>
      </div>
    </div>
  );
};
export default LeftTransitionComp;

import { PiPizzaDuotone } from "react-icons/pi";
import { IoGiftOutline } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import "./LeftTransitionComp.css";
const LeftTransitionComp = (props) => {
  return (
    <div className="leftTransitionComp">
      <div className="leftTransitionComp-icon">
        {props.data.category === "Food" && <PiPizzaDuotone size={32} />}
        {props.data.category === "Entertainment" && <IoGiftOutline size={32} />}
        {props.data.category === "Travel" && <IoCarSharp size={32} />}
      </div>
      <div className="leftTransitionCompChild">
        <p>{props.data.name}</p>
        <div>{props.data.date}</div>
      </div>
    </div>
  );
};
export default LeftTransitionComp;
{
  /* <IoCarSharp /> */
}

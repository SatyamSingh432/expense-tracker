import LeftTransitionComp from "./LeftTransitionComp";
import RightTransactionComp from "./RightTransactionComp";
import "./TransactionComp.css";
const TransactionComp = (props) => {
  return (
    <div className="transactionComp">
      <div className="transactionComp-child">
        <LeftTransitionComp data={props.data} />
        <RightTransactionComp data={props.data} />
      </div>
      <hr />
    </div>
  );
};
export default TransactionComp;

import LeftTransitionComp from "./LeftTransitionComp";
import RightTransactionComp from "./RightTransactionComp";
import "./TransactionComp.css";
const TransactionComp = () => {
  return (
    <div className="transactionComp">
      <div className="transactionComp-child">
        <LeftTransitionComp />
        <RightTransactionComp />
      </div>
      <hr />
    </div>
  );
};
export default TransactionComp;

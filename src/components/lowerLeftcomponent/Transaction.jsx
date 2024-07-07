import TransactionComp from "./TransactionComp";
import "./Transaction.css";
const Transaction = (props) => {
  return (
    <div className="Transaction">
      {props.data.map((ele) => {
        return <TransactionComp key={ele.key} data={ele} />;
      })}
    </div>
  );
};
export default Transaction;

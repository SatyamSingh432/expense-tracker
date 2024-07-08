import TransactionComp from "./TransactionComp";
import "./Transaction.css";
const Transaction = () => {
  let getString = localStorage.getItem("data");
  let getArray = JSON.parse(getString);
  return (
    <div className="Transaction">
      {getArray.map((ele) => {
        return <TransactionComp key={ele.key} data={ele} />;
      })}
    </div>
  );
};
export default Transaction;

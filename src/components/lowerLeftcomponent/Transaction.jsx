import TransactionComp from "./TransactionComp";
import { useState } from "react";
import "./Transaction.css";
const Transaction = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  let getString = localStorage.getItem("data") || "[]";
  let getArray = JSON.parse(getString);
  const lastCompIndex = currentPage * 3;
  const firstCompIndex = lastCompIndex - 3;
  const slicedData = props.renderData.slice(firstCompIndex, lastCompIndex);
  const noOfPages = Math.ceil(getArray.length / 3);

  const handlerPrevBtn = () => {
    if (currentPage !== 1) {
      setCurrentPage((curr) => curr - 1);
    }
    return;
  };
  const handlerNxtBtn = () => {
    if (currentPage !== noOfPages) setCurrentPage((curr) => curr + 1);
  };
  return (
    <div className="Transaction">
      {slicedData.map((ele, index) => {
        return (
          <TransactionComp key={index} data={ele} dataModal={props.data} />
        );
      })}
      <div className="pagination">
        <button className="pagination-btn" onClick={handlerPrevBtn}>
          &larr;
        </button>
        <p className="paginationCount">{currentPage}</p>
        <button className="pagination-btn" onClick={handlerNxtBtn}>
          &rarr;
        </button>
      </div>
    </div>
  );
};
export default Transaction;

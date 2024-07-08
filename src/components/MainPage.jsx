import "./MainPage.css";
import MainBox from "./uppercomponent/MainBox";
import FinalLowerComponent from "./finalLowerComp/FinalLowerComponent";
import Modal from "./modal/Modal";
import AddModal from "./modal/AddModal";
import { useState } from "react";
const MainPage = () => {
  const data = [
    {
      key: 0,
      category: "Food",
      price: 150,
      name: "Samosa",
      date: "March 20,2024",
    },
    {
      key: 1,
      category: "Entertainment",
      price: 300,
      name: "Movie",
      date: "March 21,2024",
    },
    {
      key: 2,
      category: "Travel",
      price: 50,
      name: "Auto",
      date: "March 22,2024",
    },
    {
      key: 3,
      category: "Travel",
      price: 200,
      name: "Bus",
      date: "March 23,2024",
    },
    {
      key: 4,
      category: "Entertainment",
      price: 1000,
      name: "Tour",
      date: "March 23,2024",
    },
    {
      key: 5,
      category: "Food",
      price: 280,
      name: "Pizza",
      date: "March 24,2024",
    },
    {
      key: 6,
      category: "Food",
      price: 540,
      name: "Drinks",
      date: "March 25,2024",
    },
  ];
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAmount, setOpenAmount] = useState(false);
  const modalHandlerAddOpen = () => {
    setOpenAdd(true);
  };
  const modalHandlerAddClose = () => {
    setOpenAdd(false);
  };
  const modalHandlerEditOpen = () => {
    setOpenEdit(true);
  };
  const modalHandlerEditClose = () => {
    setOpenEdit(false);
  };
  const modalHandlerAmountOpen = () => {
    setOpenAmount(true);
  };
  const modalHandlerAmountClose = () => {
    setOpenAmount(false);
  };
  let string = JSON.stringify(data);
  localStorage.setItem("data", string);
  return (
    <>
      <div className="mainPage">
        <div className="expense-tracker">Expense Tracker</div>
        <div className="recent-transaction">Recent Transaction</div>
        <div className="top-expenses">Top Expenses</div>
        <MainBox
          data={modalHandlerAddOpen}
          dataAmount={modalHandlerAmountOpen}
        />
        <FinalLowerComponent data={modalHandlerEditOpen} />
      </div>
      <Modal
        modalOpen={openAdd}
        data={modalHandlerAddClose}
        name="Add Expense"
      />
      <Modal
        modalOpen={openEdit}
        data={modalHandlerEditClose}
        name="Edit Expense"
      />
      <AddModal modalOpen={openAmount} data={modalHandlerAmountClose} />
    </>
  );
};
export default MainPage;

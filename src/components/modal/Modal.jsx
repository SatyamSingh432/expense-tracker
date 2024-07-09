import ReactModal from "react-modal";
import { useState } from "react";
import "./Modal.css";
import Input from "./Input";

const Modal = (props) => {
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      key: Date.now(),
      category: category,
      price: money,
      name: title,
      date: date,
    };
    const existingData = JSON.parse(localStorage.getItem("data"));
    const updatedData = [data, ...existingData];
    localStorage.setItem("data", JSON.stringify(updatedData));
    props.dataChangeUpdate(updatedData);

    setTitle("");
    setDate("");
    setMoney("");
    setCategory("");
    props.data();
  };

  const handlerTitle = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handlerDate = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const handlerMoney = (event) => {
    setMoney(event.target.value);
    console.log(event.target.value);
  };

  const handlerCategory = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  return (
    <ReactModal
      isOpen={props.modalOpen}
      onRequestClose={props.data}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.77)",
        },
        content: {
          position: "absolute",
          top: "29vh",
          left: "28vw",
          right: "29vw",
          bottom: "25vh",
          border: "none",
          background: "rgba(239, 239, 239, 0.85)",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          borderRadius: "15px",
        },
      }}
    >
      <form className="modal" onSubmit={handleSubmit}>
        <Input
          myPlaceHolder="Title"
          dataType="name"
          value={title}
          dataChange={handlerTitle}
        />
        <Input
          myPlaceHolder="Price"
          dataType="number"
          value={money}
          dataChange={handlerMoney}
        />
        <select
          className="select"
          name="category"
          id="category"
          value={category}
          onChange={handlerCategory}
        >
          <option value="">Select Category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
        </select>
        <Input
          myPlaceHolder="dd/mm/yyyy"
          dataType="date"
          value={date}
          dataChange={handlerDate}
        />
        <button className="modal-add-btn" type="submit">
          Add Button
        </button>
        <button className="modal-cancel-btn" type="button" onClick={props.data}>
          Cancel
        </button>
      </form>
      <h1>{props.name}</h1>
    </ReactModal>
  );
};

export default Modal;

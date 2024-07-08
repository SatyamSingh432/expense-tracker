import "./MainPage.css";
import MainBox from "./uppercomponent/MainBox";
import FinalLowerComponent from "./finalLowerComp/FinalLowerComponent";
const MainPage = () => {
  const data = [
    {
      key: 1,
      category: "Food",
      price: 150,
      name: "Samosa",
      date: "March 20,2024",
    },
    {
      key: 2,
      category: "Entertainment",
      price: 300,
      name: "Movie",
      date: "March 21,2024",
    },
    {
      key: 3,
      category: "Travel",
      price: 50,
      name: "Auto",
      date: "March 22,2024",
    },
  ];
  let string = JSON.stringify(data);
  localStorage.setItem("data", string);
  return (
    <div className="mainPage">
      <div className="expense-tracker">Expense Tracker</div>
      <div className="recent-transaction">Recent Transaction</div>
      <div className="top-expenses">Top Expenses</div>
      <MainBox />
      <FinalLowerComponent />
    </div>
  );
};
export default MainPage;

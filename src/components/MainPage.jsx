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
      Date: "March 20,2024",
    },
    {
      key: 2,
      category: "Entertainment",
      price: 300,
      name: "Movie",
      Date: "March 21,2024",
    },
    {
      key: 3,
      category: "Travel",
      price: 50,
      name: "Auto",
      Date: "March 22,2024",
    },
  ];
  return (
    <div className="mainPage">
      <div className="expense-tracker">Expense Tracker</div>
      <div className="recent-transaction">Recent Transaction</div>
      <div className="top-expenses">Top Expenses</div>
      <MainBox />
      <FinalLowerComponent data={data} />
    </div>
  );
};
export default MainPage;

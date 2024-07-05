import "./MainBox.css";
import AddBox from "./AddBox";
import PieChartFig from "./PieChartFig";
const MainBox = () => {
  return (
    <div className="mainBox">
      <div className="addBox1">
        <AddBox
          txtColor="rgba(157, 255, 91, 1)"
          color="linear-gradient(to right, rgba(181, 220, 82, 1), rgba(137, 225, 72, 1))"
          content="Wallet Balance: "
          amount="4500"
        />
        <AddBox
          txtColor="rgba(255, 147, 4, 1)"
          color="linear-gradient(to right, rgba(255, 149, 149, 1), rgba(255, 71, 71, 1),rgba(255, 56, 56, 1))"
          content="Expenses: "
          amount="500"
        />
      </div>
      <PieChartFig />
    </div>
  );
};
export default MainBox;

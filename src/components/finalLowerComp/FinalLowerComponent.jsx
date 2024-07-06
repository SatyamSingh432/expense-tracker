import BarChartBox from "../lowerchartcomp/BarChartBox";
import Transaction from "../lowerLeftcomponent/Transaction";
import "./FinalLowerComponent.css";
const FinalLowerComponent = () => {
  return (
    <div className="finalLowerComponent">
      <Transaction />
      <BarChartBox />
    </div>
  );
};
export default FinalLowerComponent;

import BarChartBox from "../lowerchartcomp/BarChartBox";
import Transaction from "../lowerLeftcomponent/Transaction";
import "./FinalLowerComponent.css";
const FinalLowerComponent = (props) => {
  return (
    <div className="finalLowerComponent">
      <Transaction data={props.data} />
      <BarChartBox />
    </div>
  );
};
export default FinalLowerComponent;

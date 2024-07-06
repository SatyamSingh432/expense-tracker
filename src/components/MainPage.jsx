import "./MainPage.css";
import MainBox from "./uppercomponent/MainBox";
import FinalLowerComponent from "./finalLowerComp/FinalLowerComponent";
const MainPage = () => {
  return (
    <div className="mainPage">
      <MainBox />
      <FinalLowerComponent />
    </div>
  );
};
export default MainPage;

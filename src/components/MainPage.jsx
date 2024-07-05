import "./MainPage.css";
import MainBox from "./uppercomponent/MainBox";
import Transaction from "./lowercomponent/Transaction";
const MainPage = () => {
  return (
    <>
      <div className="mainPage">
        <MainBox />
        <Transaction />
      </div>
    </>
  );
};
export default MainPage;

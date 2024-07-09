import "./IconButton.css";
const IconButton = (props) => {
  return (
    <button className="iButton" onClick={props.dataModal}>
      <img src={props.img} alt="qwed" />
    </button>
  );
};
export default IconButton;

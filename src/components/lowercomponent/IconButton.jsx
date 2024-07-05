import "./IconButton.css";
const IconButton = (props) => {
  return (
    <button className="iButton">
      <img src={props.img} alt="qwed" />
    </button>
  );
};
export default IconButton;

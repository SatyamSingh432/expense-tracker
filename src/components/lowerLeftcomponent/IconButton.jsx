import "./IconButton.css";
const IconButton = (props) => {
  console.log(props.data);

  return (
    <button className="iButton" onClick={props.dataModal}>
      <img src={props.img} alt="qwed" />
    </button>
  );
};
export default IconButton;

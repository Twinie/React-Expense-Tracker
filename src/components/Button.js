const Button = ({ onShow, isAddButton, color }) => {
  return (
    <button
      onClick={onShow}
      style={{
        cursor: "pointer",
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "3px",
      }}
    >
      {isAddButton ? "ADD" : "CLOSE"}
    </button>
  );
};

export default Button;

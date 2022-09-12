import { FaTimes } from "react-icons/fa";

const Item = ({ task }) => {
  return (
    <>
      <div className="expense-box">
        <div>
          <p>CATEGORY: {task.category}</p>
          <p>EXPENSE: {task.expense}</p>
        </div>

        <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </div>
    </>
  );
};

export default Item;

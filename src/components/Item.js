import { FaTimes } from "react-icons/fa";

const Item = ({ task, onDelete }) => {
  return (
    <>
      <div className="expense-box">
        <div>
          <p>CATEGORY: {task.category}</p>
          <p>EXPENSE: {task.expense}</p>
        </div>

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
    </>
  );
};

export default Item;

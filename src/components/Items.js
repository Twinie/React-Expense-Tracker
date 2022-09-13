import Item from "./Item";

const Items = ({ tasks, onDelete }) => {
  let expense = 0;
  return (
    <div>
      {tasks.map((task) => (
        <Item task={task} key={task.id} onDelete={onDelete}></Item>
      ))}

      <div className="expense-total">
        {tasks.forEach((element) => (expense += element.expense))}
        <h3>TOTAL EXPENSE: {expense}</h3>
      </div>
    </div>
  );
};

export default Items;

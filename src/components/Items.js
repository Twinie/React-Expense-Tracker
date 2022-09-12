import Item from "./Item";

const Items = ({ tasks }) => {
  let expense = 0;
  return (
    <div>
      {tasks.map((task) => (
        <Item task={task} key={task.id}></Item>
      ))}

      <div className="expense-total">
        {tasks.forEach((element) => (expense += element.expense))}
        TOTAL EXPENSE: {expense}
      </div>
    </div>
  );
};

export default Items;

import Item from "./Item";

//tasks assigned as props to get array from the virtual server
const Items = ({ tasks, onDelete }) => {
  let expense = 0;
  return (
    <div>
      {tasks.map((task) => (
        /* here the task is taken as attribute so that it can be used as props in item.js file */
        <Item task={task} key={task.id} onDelete={onDelete}></Item>
      ))}
      {/* to sum up the expenses */}
      <div className="expense-total">
        {tasks.forEach((element) => (expense += element.expense))}
        <h3>TOTAL EXPENSE: {expense}</h3>
      </div>
    </div>
  );
};

export default Items;

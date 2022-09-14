import { useState } from "react";

const Form = ({ onPost }) => {
  const [category, setCategory] = useState("");
  const [expense, setExpense] = useState("");

  let d = new Date();
  let presentDate =
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  const handleSubmit = (event) => {
    event.preventDefault();
    // the object that has been posted actually gets converted to ^
    // ^ string which curbs to add the number so expense is converted to number and assigned to its key.
    let Expense = parseInt(expense);
    onPost({ category, expense: Expense, presentDate });
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <label>
        Enter your Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter Expense:
        <input
          type="number"
          defaultValue={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        INR
        <br />
      </label>
      <label>Date: {presentDate}</label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;

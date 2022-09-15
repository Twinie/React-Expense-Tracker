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

    {
      category === ""
        ? alert("Please fill up the Expenses!!")
        : onPost({ category, expense: Expense, presentDate });
    }
  };
  const buttonStyling = {
    color: "white",
    padding: "8px 30px",
    backgroundColor: "green",
    border: "none",
    borderRadius: "4px",
  };
  return (
    <form className="form-mod" onSubmit={handleSubmit}>
      <label>
        Enter your Category:
        <br />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>

      <label>
        Enter Expense:
        <br />
        <input
          type="number"
          defaultValue={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        INR
      </label>
      <label>Date: {presentDate}</label>
      <br />
      <input type="submit" style={buttonStyling} />
    </form>
  );
};

export default Form;

// import { useState } from "react";

const Dropdown = ({ categoryCheck }) => {
  //   const [optionValue, setOptionValue] = useState("all");

  return (
    <>
      <label htmlFor="categories">
        Choose to view your expense in a specific category:
      </label>
      <br />
      <select
        name="categories"
        id="categories"
        style={{ marginBottom: "20px" }}
        onChange={categoryCheck}
      >
        {options.map((option) => (
          <option key={option.id} value={option.category}>
            {option.category}
          </option>
        ))}
      </select>
    </>
  );
};
let options = [
  { id: 1, category: "All" },
  { id: 2, category: "Bills" },
  { id: 3, category: "Clothing & Accssories" },
  { id: 4, category: "Education" },
  { id: 5, category: "Food & Groceries" },
  { id: 6, category: "Recreational Activities" },
  { id: 7, category: "Travel" },
  { id: 8, category: "Miscellaneous" },
];

export default Dropdown;

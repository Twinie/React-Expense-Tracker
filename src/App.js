import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Items from "./components/Items";
import Dropdown from "./components/Dropdown";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //fetch tasks
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/posts");
    let data = await res.json();
    // let data1 = { ...data, expense: parseInt(data.expense) };
    return data;
  };

  //get tasks
  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    };

    getTask();
  }, []);

  //to delete a task
  const deleteTask = async (itemId) => {
    await fetch(`http://localhost:5000/posts/${itemId}`, {
      method: "DELETE",
    });
    const tasksCopy = [...tasks];
    setTasks(tasksCopy.filter((task) => task.id !== itemId));
  };

  //to add a task
  const postTask = async (data) => {
    const res = await fetch(`http://localhost:5000/posts`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //the response from post request is converted to json object.
    const revertData = await res.json();
    // that object with ID is pushed to the existing posts to get the unique key for every task and that i need for my items.js file
    setTasks([...tasks, revertData]);
  };

  //show form
  const showForms = () => {
    setShowForm(!showForm);
  };

  //to check the category in dropdown
  const categoryCheck = (evt) => {
    let value = evt.target.value;
    let categoryCheckTasks = tasks.filter((task) => task.category === value);
    setFilteredTasks(categoryCheckTasks);
  };

  //to render(browser)
  return (
    <div className="App">
      <Header onShow={showForms} isAddButton={!showForm} />
      {showForm && <Form onPost={postTask} />}
      <Dropdown categoryCheck={categoryCheck} />
      <Items tasks={filteredTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Items from "./components/Items";

function App() {
  const [tasks, setTasks] = useState([]);

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

  const deleteTask = async (itemId) => {
    await fetch(`http://localhost:5000/posts/${itemId}`, {
      method: "DELETE",
    });
    const tasksCopy = [...tasks];
    setTasks(tasksCopy.filter((task) => task.id !== itemId));
  };

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

  return (
    <div className="App">
      <Header />
      <Form onPost={postTask} />
      <Items tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

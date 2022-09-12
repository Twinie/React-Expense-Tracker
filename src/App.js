import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [tasks, setTasks] = useState([]);

  //fetch tasks
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/posts");
    let data = await res.json();
    return data;
  };

  //get tasks

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    };

    getTask();
    // console.log(taskData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Items tasks={tasks} />
    </div>
  );
}

export default App;

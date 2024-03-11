import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div className="to-do-form">
        <div className="header">
          <h1>To do's</h1>
        </div>
        <MyForm addTask={addTask} />
        <ListOfTasks tasks={tasks} />
      </div>
    </>
  );
}

function MyForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="inputed-to-dos"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

function ListOfTasks({ tasks }) {
  return (
    <>
      <div id="list-of-tasks">
          {tasks.map((task, index) => (
            <p key={index}>{task}</p>
          ))}
      </div>
    </>
  );
}

export default App;

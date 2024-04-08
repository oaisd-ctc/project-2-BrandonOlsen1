import React, { useState } from "react";
import TaskList from "./db.js";
import "./App.css";

function App() {
  const [myTasks, setMyTasks] = useState([]);

  const addTask = (task) => {
    setMyTasks([...myTasks, task]);
  };

  return (
    <div className="to-do-form">
      <div className="header">
        <h1>To do's</h1>
      </div>
      <MyForm addTask={addTask} />
      <ListOfTasks tasks={myTasks} />
    </div>
  );
}

function MyForm({ addTask }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Home");
  const [errors, setErrors] = useState({ task: false, category: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task) {
      setErrors((prevErrors) => ({ ...prevErrors, task: true }));
    } else {
      addTask({ task, category });
      setTask("");
      setCategory("Home");
      setErrors({ task: false, category: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="inputed-to-dos"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className={errors.task ? "error" : ""}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={errors.category ? "error" : ""}
      >
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Work">Work</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

function ListOfTasks({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const handleComplete = (index) => {
    setCompletedTasks([...completedTasks, index]);
  };

  const handleDelete = (index) => {
    setDeletedTasks([...deletedTasks, index]);
  };
   

  return (
    <div id="listoftasks">

      {tasks.map((task, index) => {
        if (deletedTasks.includes(index) || completedTasks.includes(index)) {
          return null;
        }
        return (
          <div id="todoitem" key={index}>
            <p>{task.task}</p>
            <button
              onClick={() => handleComplete(index)}
              type="button"
              style={{
                backgroundColor: "#28a745",
              }}
            >
              Complete
            </button>
            <button onClick={() => handleDelete(index)} type="button">
              Delete
            </button>
          </div>
        );
      })}

      <div id="listofcompletetask">
        <br />
        <br />
        <br />
        <h2> Completed Tasks </h2>
        {tasks.map((task, index) => {
          if (completedTasks.includes(index) && !deletedTasks.includes(index)) {
            return (
              <div id="completeditem" key={index}>
                <p>{task.task}</p>
                <button onClick={() => handleDelete(index)} type="button">
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;

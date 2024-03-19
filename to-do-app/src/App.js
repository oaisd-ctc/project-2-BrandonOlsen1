import React, { useState } from "react";
import "./App.css";

function App() {
  const [myTasks, setMyTasks] = useState([]);

  const addTask = (task) => {
    setMyTasks([...myTasks, task]);
  };

  return (
    <div className="to-do-form">
      <div className="header">
        <h1> To do's </h1>
      </div>
      <MyForm addTask={addTask} />
      <ListOfTasks tasks={myTasks} />
    </div>
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
        const isCompleted = completedTasks.includes(index);
        return (
          <div id="todoitem" key={index}>
            <p>{task}</p>
            <button onClick={() => handleComplete(index)} type="button">
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
                <p>{task}</p>
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

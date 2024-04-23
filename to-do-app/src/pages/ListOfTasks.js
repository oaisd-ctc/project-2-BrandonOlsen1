import React, { useState } from "react";

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
        <h2>Completed Tasks</h2>
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
          return null; // Add this line to handle no return value warning
        })}
      </div>
    </div>
  );
}

export default ListOfTasks;

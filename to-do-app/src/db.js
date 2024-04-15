import React from 'react';

function Task({ task }) {
  return (
    <div className="task">
      <h3>{task.Name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed}</p>
    </div>
  );
}

export default Task;

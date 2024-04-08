// TaskList.js
import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

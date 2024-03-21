import React, { useState, useEffect } from 'react';

function TheTaskList() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('/api/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData = await response.json();
        setTasks(tasksData.tasks || []);
        setCompletedTasks(tasksData.completedTasks || []);
        setDeletedTasks(tasksData.deletedTasks || []);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []); // This empty array ensures the effect runs only once on mount

  const handleComplete = (index) => {
    // Handle completing a task
  };

  const handleDelete = (index) => {
    // Handle deleting a task
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
    </div>
  );
}

export default TheTaskList;

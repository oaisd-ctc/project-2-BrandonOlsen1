import React, { useState, useEffect } from 'react';
import MyForm from './pages/MyForm';
import ListOfTasks from './pages/ListOfTasks';
import './App.css'; // Import your CSS file if needed
import { fetchData } from './pages/DataBaseData'; // Import fetchData from DataBaseData.js

function App() {
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const data = await fetchData();
        setMyTasks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromDB(); // Call fetchDataFromDB function when the component mounts
  }, []); // Run this effect only once on component mount

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

export default App;

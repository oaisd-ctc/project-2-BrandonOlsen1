import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyForm from './pages/MyForm';
import ListOfTasks from './pages/ListOfTasks';
import './Styles/App.css'; 
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Work from './pages/Work';
import School from './pages/School';
function App() {
  const [myTasks, setMyTasks] = useState([]);
  const addTask = (task) => {
    setMyTasks([...myTasks, task]);
  };
  return (
    <BrowserRouter>
      <div className="to-do-form">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="Home" element={<Home />} />
            <Route path="School" element={<School />} />
            <Route path="Work" element={<Work />} />
          </Route>
        </Routes>
        <div className="header">
          <h1>To do's</h1>
        </div>
        <MyForm addTask={addTask} />
        <ListOfTasks tasks={myTasks} />
      </div>
    </BrowserRouter>
  );
}
export default App;
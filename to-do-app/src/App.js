import React, { useState } from 'react';
import "./App.css";

function App() {
    const [myTasks, setMyTasks] = useState([]);

    // Function to add a task
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
    return (
        <div id="list-of-tasks">
            {tasks.map((task, index) => (
                <div id="to-do-item">
                    <p key={index}>{task}</p> 
                    <button key={index} type='submit'  id="button"  >Complete     </button>
                    
                    <button key={index} type='submit' id="button" >     Delete</button>              
                </div>
            ))}
        </div>
    );
}

export default App;

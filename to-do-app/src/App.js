import React, { useState } from 'react';
import "./App.css";

function App() {
    return (
        <>
            <div className="to-do-form">
                <div className="header">
                    <h1> To do's </h1>
                </div>
                <MyForm />
                <ListOfTasks />
            </div>
        </>
    );
}

export default App;

function MyForm() {
    const [task, setTask] = useState("");
    const [myTasks, setMyTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMyTasks([...myTasks, task]);
        console.log(myTasks);
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

function ListOfTasks() {


    return (
        <>
            <div id="list-of-tasks">
                
            </div>
        </>
    );
}



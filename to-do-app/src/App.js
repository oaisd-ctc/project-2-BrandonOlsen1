import ListGroup from "./components/ListGroup.tsx";
import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Tasks from "./components/Tasks.jsx";

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

    const handleSubmit = (event) => {
    event.preventDefault();
    
    // {document.addEventListener('DOMContentLoaded', async () => {
    //     let para = document.createElement('p')
    //     para.textContent = task
        
    // })
    // }
    console.log(task)
        // I need to just equip and UL and then have it be able to connect to it.
    }


    return (
      <form onSubmit={handleSubmit}>
        <input type="text" id="inputed-to-dos" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        />
        
        <input type="submit" value="Submit"/>
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
  






  function ListOfTasks () {

    return (
        <>
        <ul id="list-of-tasks">

        </ul>
        </>
    );
  }
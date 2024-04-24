import React, { useState } from "react";

function MyForm({ addTask }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Home");
  const [errors, setErrors] = useState({ task: false, category: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task) {
      setErrors((prevErrors) => ({ ...prevErrors, task: true }));
    } else {
      addTask({ task, category });
      setTask("");
      setCategory("Home");
      setErrors({ task: false, category: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="inputed-to-dos"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className={errors.task ? "error" : ""}
      />
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
// import { todoContext } from '../App';

// Default state for useState
const defaultState = {
  id: "",
  task: "",
  completed: false,
  comment: false,
  comment_data: "",
};

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState(defaultState);

  function getInputOnChange(e) {
    const { value: task } = e.target;
    setTodo((todo) => ({ ...todo, task }));
  }

  async function UpdateTodo(){
    
  }

  function handleInput(e) {
    e.preventDefault();
    if (!todo.task.trim()) {
      alert("Todo should have a body!");
      return;
    }
    addTodo({ ...todo, id: uuidv4() });
    setTodo(defaultState);
  }

  return (
    <form onSubmit={handleInput} className="form">
      <input
        type="text"
        name="task"
        value={todo.task}
        onChange={getInputOnChange}
        autoComplete="off"
        placeholder="Enter your task....!"
      />
      <button type="submit"> Add Task</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default TodoForm;

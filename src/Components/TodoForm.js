import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { todoContext } from '../App';

function TodoForm({ addTodo }) {
  const {todo,setTodo} = useContext(todoContext);
  
  function getInputOnChange(e) {
    setTodo((todo) => ({ ...todo, task: e.target.value }));
  }

  function handleInput(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo((todo) => ({ ...todo, task: '' }));
    }
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

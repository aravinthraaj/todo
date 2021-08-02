import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
    comment: false,
  });

  function getInputOnChange(e) {
    setTodo((todo) => ({ ...todo, task: e.target.value }));
    console.log(todo.task);
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
      />
      <button type="submit"> Add Task</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};
export default TodoForm;

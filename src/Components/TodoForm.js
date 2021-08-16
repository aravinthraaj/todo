import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { todoContext } from '../App';

function TodoForm({ addTodo }) {
  const [inputvalue, setinputvalue] = useState(' ');
  const { todo, setTodo } = useContext(todoContext);

  function getInputOnChange(e) {
    setinputvalue(e.target.value);
  }

  function handleInput(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo((todo) => ({ ...todo, task: '' }));
    }
  }
  
  async function post(id, task, completed = false) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        task: task,
        completed: completed,
      }),
    };
    fetch('https://stormy-spire-33682.herokuapp.com/v1/todo', requestOptions);
  }

  function updateTodo(e) {
    e.preventDefault();
    const id = uuidv4();
    console.log(id);

    post(id, inputvalue, false);
    console.log('reached here');
  }

  return (
    <form onSubmit={handleInput} className="form">
      <input
        id="input"
        type="text"
        name="task"
        value={inputvalue}
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

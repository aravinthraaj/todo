import React,{useContext} from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { todosContext } from '../App';

function TodoList(props) {
  const {
    toggle,
    removeTodo,
    addTodo,
  } = props;

  const {todos}= useContext(todosContext);
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggle={toggle}
            removeTodo={removeTodo}
            addTodo={addTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  toggle: PropTypes.func,
  removeTodo: PropTypes.func,
  addTodo: PropTypes.func,
};

export default TodoList;

import React,{useContext} from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { todosContext } from '../App';

function TodoList(props) {
  const {
    toggleComplete,
    removeTodo,
    toggleComment,
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
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            toggleComment={toggleComment}
            addTodo={addTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleComplete: PropTypes.func,
  removeTodo: PropTypes.func,
  toggleComment: PropTypes.func,
  addTodo: PropTypes.func,
  setTodos: PropTypes.func,
};

export default TodoList;

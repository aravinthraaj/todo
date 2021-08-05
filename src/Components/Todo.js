import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { todosContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faComment,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

function Todo(props) {
  const {todo, toggleComplete, removeTodo, toggleComment } =
		props;
  const {todos, setTodos}= useContext(todosContext);

  function hanldeCompleteClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveTodo() {
    removeTodo(todo.id);
  }

  function handleComment() {
    toggleComment(todo.id);
  }

  function getInputComment(value, name, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            [name]: value,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="todo-container">
      <div className="toto-body">
        <div className="todo-data">
          <li
            style={{
              textDecoration: todo.completed ? 'line-through' : null,
            }}
          >
            {todo.task}
          </li>
        </div>
        <div className="todo-actions">
          <FontAwesomeIcon
            icon={faCheckCircle}
            onClick={hanldeCompleteClick}
            className="button-todo btn-complete"
          />
          <FontAwesomeIcon
            icon={faComment}
            onClick={handleComment}
            className="button-todo btn-comment"
          />
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={handleRemoveTodo}
            className="button-todo btn-close"
          />
        </div>
      </div>
      <div>
        {todo.comment && (
          <Comment
            getInputComment={getInputComment}
            value={todo.comment_data}
            id={todo.id}
          />
        )}
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleComplete: PropTypes.func,
  removeTodo: PropTypes.func,
  toggleComment: PropTypes.func,
  todos: PropTypes.func,
  setTodos: PropTypes.func,
};
export default Todo;

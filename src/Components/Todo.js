import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faComment,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

function Todo({ todo, toggleComplete, removeTodo, toggleComment }) {
  function hanldeCompleteClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveTodo() {
    removeTodo(todo.id);
  }

  function handleComment() {
    toggleComment(todo.id);
  }


 

  return (
    
    <div  className="todo-container">
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
      <div>{todo.comment && <Comment />}</div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleComplete: PropTypes.func,
  removeTodo: PropTypes.func,
  toggleComment: PropTypes.func,
};
export default Todo;

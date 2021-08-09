import React,{useContext,useCallback} from 'react';
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
  const {todo,toggle, removeTodo} =
		props;
  const {todos, setTodos}= useContext(todosContext);

  function hanldeCompleteClick() {
    toggle("completed",todo.id);
  }

  function handleRemoveTodo() {
    removeTodo(todo.id);
  }

  function handleComment() {
    toggle("comment",todo.id);
  }

  const getInputComment = useCallback((value, name, id)=>{
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
  })


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
  toggle: PropTypes.func,
  removeTodo: PropTypes.func,
};
export default Todo;

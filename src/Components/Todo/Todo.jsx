import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Comment from "../Comment";
import './styles.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faComment,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

function Todo(props) {
  const { todo, toggle, removeTodo, updateTodo } = props;

  const hanldeCompleteClick = useCallback(() => {
    toggle("completed", todo.id);
  }, [toggle, todo.id]);

  const handleRemoveTodo = useCallback(() => {
    removeTodo(todo.id);
  }, [removeTodo, todo.id]);

  const handleComment = useCallback(() => {
    toggle("comment", todo.id);
  }, [toggle, todo.id]);

  const getInputComment = useCallback(
    (value, name) => {
      updateTodo({ id: todo.id, [name]: value });
    },
    [todo.id, updateTodo]
  );

  return (
    <div className="todo-container">
      <div className="toto-body">
        <div className="todo-data">
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : null,
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
  updateTodo: PropTypes.func,
};
export default Todo;

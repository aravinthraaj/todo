import React from "react";
import PropTypes from "prop-types";

function TodoList(props) {
  const { children } = props;

  return (
    <div className="todo-list">
      <ul>{children}</ul>
    </div>
  );
}

TodoList.propTypes = {
  toggle: PropTypes.func,
  removeTodo: PropTypes.func,
  addTodo: PropTypes.func,
  children: PropTypes.node,
};

export default TodoList;

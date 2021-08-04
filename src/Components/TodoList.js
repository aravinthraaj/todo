import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function TodoList({
  todos,
  toggleComplete,
  removeTodo,
  toggleComment,
  addTodo,
  setTodos,
} ) {

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
            todos={todos}
            setTodos={setTodos}
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

import React, { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Todo from "./Components/Todo";
import "./App.css";

const LOCAL_STORAGE_KEY = "todo-list-store";
/*
 *! Used Conetext Here.
 */
export const todoContext = React.createContext({
  todo: {
    id: "",
    task: "",
    completed: false,
    comment: false,
    comment_data: "",
  },
  setTodo: () => {},
});

export const todosContext = React.createContext({
  todos: [],
  setTodos: () => {},
});

function App() {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    comment: false,
    comment_data: "",
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /*
   *! Reduced toggleComment and toggleCompleted in to
   *! single function to reduce the number of props.
   */
  function toggle(name, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (name === "completed") {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          if (name === "comment") {
            return {
              ...todo,
              comment: !todo.comment,
            };
          }
        }
        return todo;
      })
    );
  }
  
  (async function loaddatd() {
    const response = await fetch(
      "https://stormy-spire-33682.herokuapp.com/v1/todo"
    );
    const data = await response.json();
    console.log(data.data);
    // console.log(Object.keys(data));
  })();

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos((todos) => [todo, ...todos]);
  }

  return (
    <div className="App">
      <todoContext.Provider value={{ todo, setTodo }}>
        <todosContext.Provider value={{ todos, setTodos }}>
          <header> What's todays task ....... </header>
          <TodoForm addTodo={addTodo} />
          <TodoList>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggle={toggle}
                removeTodo={removeTodo}
                addTodo={addTodo}
              />
            ))}
          </TodoList>
        </todosContext.Provider>
      </todoContext.Provider>
    </div>
  );
}

export default App;

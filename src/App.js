import React, { useState, useEffect, useCallback } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Todo from "./Components/Todo";
// import Nav from "./Components/Nav";
import "./App.css";

// const LOCAL_STORAGE_KEY = "todo-list-store";

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
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getdata() {
      const response = await fetch(
        "https://stormy-spire-33682.herokuapp.com/v1/todo"
      );
      const jsondata = await response.json();
      console.log(jsondata.data);
      setTodos(jsondata.data);
    }
    getdata();
  }, []);

  // useEffect(() => {
  //   async function updateTodo() {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //     console.log("=========");
  //     console.log(storageTodos);
  //     console.log("=========");

  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  const toggle = useCallback((name, id) => {
    setTodos((todos) =>
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
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const addTodo = useCallback((todo) => {
    setTodos((todos) => [todo, ...todos]);
  }, []);

  const updateTodo = useCallback(({ id, ...todo }) => {
    setTodos((todos) =>
      todos.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            ...todo,
          };
        }
        return t;
      })
    );
  }, []);

  return (
    <div className="App">
      <todosContext.Provider value={{ todos, setTodos }}>
        {/* <Nav /> */}
        <div className="main-container">
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
                updateTodo={updateTodo}
              />
            ))}
          </TodoList>
        </div>
      </todosContext.Provider>
    </div>
  );
}

export default App;

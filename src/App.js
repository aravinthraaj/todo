import React, { useState, useEffect ,useCallback} from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Todo from './Components/Todo';
import './App.css';

const LOCAL_STORAGE_KEY = 'todo-list-store';

export const todoContext = React.createContext({
  todo: {
    id: '',
    task: '',
    completed: false,
    comment: false,
    comment_data: '',
  },
  setTodo: () => {},
});

export const todosContext = React.createContext({
  todos: [],
  setTodos: () => {},
});

function App() {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
    comment: false,
    comment_data: '',
  });
  const [todos, setTodos] = useState([]);
  // const [comments, setComments] =useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
      console.log(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggle = useCallback((name,id)=>{
    setTodos(todos=>
      todos.map((todo) => {
        if (todo.id === id) {
          if (name === 'completed') {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          if (name === 'comment') {
            return {
              ...todo,
              comment: !todo.comment,
            };
          }
        }
        return todo;
      })
    );
  })
  // function toggle(name, id) {
  //   setTodos(todos=>
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         if (name === 'completed') {
  //           return {
  //             ...todo,
  //             completed: !todo.completed,
  //           };
  //         }
  //         if (name === 'comment') {
  //           return {
  //             ...todo,
  //             comment: !todo.comment,
  //           };
  //         }
  //       }
  //       return todo;
  //     })
  //   );
  // }
  

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

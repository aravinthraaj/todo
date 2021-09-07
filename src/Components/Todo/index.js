export {default} from './Todo'

// export {default} from './Todo';import React, { useState, useEffect, useCallback } from 'react'
// import TodoList from './TodoList';
// import TodoForm from "./TodoForm";
// import Todo from "./Todo";
// import "../App.css";


// const SERVICE_URL = "https://stormy-spire-33682.herokuapp.com/v1" 

// export const todoContext = React.createContext({
//   todo: {
//     id: "",
//     task: "",
//     completed: false,
//     comment: false,
//     comment_data: "",
//   },
//   setTodo: () => {},
// });

// export const todosContext = React.createContext({
//   todos: [],
//   setTodos: () => {},
// });
// function TodoApp() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     loadTodos(({ data }) => setTodos(data))
//   }, []);

//   function loadTodos(callback) {
//     fetch(`${SERVICE_URL}/todo`)
//       .then(response => response.json())
//       .then(callback)
//       .catch(e => console.warn(e))
//   }

//   function pushTodo(todo, callback) {
//     fetch(`${SERVICE_URL}/todo`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(todo)
//     })
//       .then(r => r.json)
//       .then(body => {
//         if (typeof callback !== "undefined") {
//           callback(undefined, body)
//         }
//       })
//       .catch(e => {
//         console.warn(e)
//         if (typeof callback !== "undefined") {
//           callback(e, undefined)
//         }
//       })
//   }

//   function popTodo(id, callback) {
//     fetch(`${SERVICE_URL}/todo/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//       .then(r => r.json)
//       .then(body => {
//         if (typeof callback !== "undefined") {
//           callback(undefined, body)
//         }
//       })
//       .catch(e => {
//         console.warn(e)
//         if (typeof callback !== "undefined") {
//           callback(e, undefined)
//         }
//       })
//   }

//   // useEffect(() => {
//   //   async function updateTodo() {
//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //       },
//   //     };
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   //   if (storageTodos) {
//   //     setTodos(storageTodos);
//   //     console.log("=========");
//   //     console.log(storageTodos);
//   //     console.log("=========");

//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   // }, [todos]);

//   const toggle = useCallback((name, id) => {
//     setTodos((todos) =>
//       todos.map((todo) => {
//         if (todo.id === id) {
//           if (name === "completed") {
//             return {
//               ...todo,
//               completed: !todo.completed,
//             };
//           }
//           if (name === "comment") {
//             return {
//               ...todo,
//               comment: !todo.comment,
//             };
//           }
//         }
//         return todo;
//       })
//     );
//   }, []);

//   function removeTodo(id) {
//     popTodo(id, (err) => {
//       if (err) {
//         alert("Unable to remove todo. Request failed")
//       }
//       setTodos(todos.filter((todo) => todo.id !== id));
//     })
//   }

//   function addTodo(todo) {
//     setTodos((todos) => [todo, ...todos]);

//     pushTodo(todo)
//   }


//   // const removeTodo = useCallback((id) => {
//   //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
//   // }, []);

//   // const addTodo = useCallback((todo) => {
//   //   setTodos((todos) => [todo, ...todos]);
//   // }, []);

//   const updateTodo = useCallback(({ id, ...todo }) => {
//     setTodos((todos) =>
//       todos.map((t) => {
//         if (t.id === id) {
//           return {
//             ...t,
//             ...todo,
//           };
//         }
//         return t;
//       })
//     );
//   }, []);
//   return (
//     <div>
//       <todosContext.Provider value={{ todos, setTodos }}>
//         {/* <Nav /> */}
       
//         <div className="main-container">
//           <header> What's todays task ....... </header>
//           <TodoForm addTodo={addTodo} />
//           <TodoList>
//             {todos.map((todo) => (
//               <Todo
//                 key={todo.id}
//                 todo={todo}
//                 toggle={toggle}
//                 removeTodo={removeTodo}
//                 addTodo={addTodo}
//                 updateTodo={updateTodo}
//               />
//             ))}
//           </TodoList>
//         </div>
     
        
//       </todosContext.Provider>
//     </div>
//   )
// }

// export default TodoApp;

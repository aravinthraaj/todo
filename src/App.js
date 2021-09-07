import React from "react";
import TodoApp from './Components/TodoApp';
import SignUpScreen from "./Components/SignUpScreen/SignUpScreen";
import SignInScreen from "./Components/SignInScreen/SignInScreen";
import Nav from "./Components/Nav";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// const LOCAL_STORAGE_KEY = "todo-list-store";


const user = "null";

function App() {


  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          
          <Route exact path="/">
            {!user ? (<SignInScreen/>):(<TodoApp/>)}
          </Route>
          <Route path="/signup">
            <SignUpScreen/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

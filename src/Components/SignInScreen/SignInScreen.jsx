import React from 'react'
import './styles.css'
import {
  Link
} from "react-router-dom";

function SignInScreen() {
  // let history = useHistory();

  const userSignin = (e) =>{
    e.preventDefault();
  }
  // const register = (e) =>{
  //   e.preventDefault();
  //   history.push('/your-path')
  //   console.log("came here");
  // }


  return (
    <div className="signInScreen">
      <div className="signInScreen__body">
      <form>
        <h1>Sign In</h1>
        <input  type="email" placeholder="Email" />
        <input  type="password" placeholder="Password" />
        <button  type="submit" onClick={userSignin}>Sign In</button>
        {/* <button  type="submit" onClick={register}>test</button> */}

        <h4>
          <span className="signInScreen__gray">Don't have account? </span>         
          <Link to="/signup" className="signInScreen__link">Sign Up</Link>
        </h4>
      </form>
      </div>
    </div>
  )
}

export default SignInScreen

import React,{useRef} from 'react'
import './styles.css'
import {
  Link
} from "react-router-dom";

function SignUpScreen() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confrimpasswordRef = useRef(null);
  const SERVICE_URL = "https://stormy-spire-33682.herokuapp.com/v1" 

  const userSignup = (e) =>{
    e.preventDefault();
    if(passwordRef.current.value===confrimpasswordRef.current.value){
      const uservalue={
        email: nameRef.current.value,
        password: passwordRef.current.value,
      }
      fetch(`${SERVICE_URL}/customer/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(uservalue)
      })
        .then(r => r.json)
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }else{
      alert("Password doesnt match");
    }   
  }

  return (
    <div className="signUpScreen">
      <div className="signUpScreen__body">
      <form>
        <h1>Sign In</h1>
        <input  ref={nameRef} type="text" placeholder="Name" />
        <input  ref={emailRef} type="email" placeholder="Email" />
        <input  ref={passwordRef} type="password" placeholder="Password" />
        <input  ref={confrimpasswordRef} type="password" placeholder="Confirm Password" />
        <button  type="submit" onClick={userSignup}>Sign Up</button>
        <h4>
          <span className="signUpScreen__gray">Have account? </span>
          <Link to="/" className="signInScreen__link">Sign In</Link>

        </h4>
      </form>
      </div>
    </div>
  )
}

export default SignUpScreen

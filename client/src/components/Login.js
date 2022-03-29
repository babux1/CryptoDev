import React, { useState } from "react"
import SignupForm from "./SignupForm"
import LoginPage from "./LoginPage"

function Login({ onLogin } ) {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
        <LoginPage onLogin = { onLogin }/>
        <p>
          Don't have an account?
          <button onClick = {() => setShowLogin(false)}>
            Sign up
          </button>
        </p>
        </>
      ) : (
        <>
          <SignupForm onLogin = { onLogin } />
          <p>
            Already have an account?
            <button onClick = {() => setShowLogin(true)}>
              Log in here
            </button>
          </p>
        </>
      )}
        {/* <Link to="/loginpage">
        </Link>
        <Link to="/">
        <button type="button">
              Login
        </button>
        </Link>
        <Link to="/signup">
        <button type="signup">
              Signup
        </button>
        </Link> */}
    </div>
  )
  
}

export default Login;

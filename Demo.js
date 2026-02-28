import React from 'react'
import './Demo.css'

function Demo() {

  const ForgotPassword = () => {
    console.log(" Forgot Password ");
  };

  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>

        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Login</button>

        <p className="forgot" onClick={ForgotPassword}>
          Forgot Password?
        </p>
      </form>
    </div>
  );
}

export default Demo;
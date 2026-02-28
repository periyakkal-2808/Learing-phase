import React from 'react';
import './Login.css'
const Login = () =>{
    return(
        <>
        <center>
            <div className='Login'>

            <h2>Sign in with email</h2>
            <p>Make a database with document to Login</p>
            <form>
                <div className='login-card'>
               <div>✉️<input type="email" placeholder="enter your email"/></div>
                <div>🔎<input type="password" placeholder="enter your password"/></div>
                <a href="#" className='forgot '>Forgot pwd</a>
                <button type="submit">Login</button>
                </div>
            </form>

        </div></center>
        </>
    )
}
export default Login
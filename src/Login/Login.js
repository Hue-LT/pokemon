import React from 'react';
import "./Login.css";

function Login() {

    const login = event => {
        event.preventDefault(); 
    }  

    const register = event => {
        event.preventDefault();
    }

    return (
        <div className="login">
            <h2 className="login_logo">POKÉMON</h2>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail/Phone</h5>
                    <input type="email..."/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>
                <p>Forgot password?</p>
                <button onClick={register} className="login_registerButton">Create your POKÉMON Account</button>
            </div>
        </div>
    );
}
export default Login;
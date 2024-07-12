// src/Login.js
import React from 'react';
import '../Style/Login.css'; 
import photo from "../assets/loginImages/login-illustration.svg"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h2>Welcome Admin</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username"></label>
              <input type="text" id="username" name="username" placeholder='Username'/>
            </div>
            <div className="input-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" name="password" placeholder='Password' />
            </div>
            <button type="submit" className="login-button">Sign In</button>
          </form>
        </div>
        <div className="login-image">
          <img src={photo} />
        </div>
      </div>
    </div>
  );
};

export default Login;

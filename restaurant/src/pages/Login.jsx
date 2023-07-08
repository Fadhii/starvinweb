import React, { useState } from 'react';
import '../css/Login.css'; // Import the CSS file for the restaurant-themed styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here, e.g., sending data to a server.
    // For simplicity, we'll just display a message for successful login.
    alert('Login successful!');
  };

  return (
    <div className="main-div">
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>
          Star'<span>Vin</span>
        </div>
      </div>
      <br />
      <div class="login">
        <input type="text" placeholder="username" name="user" />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <input type="button" value="Login" />
        <div class="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

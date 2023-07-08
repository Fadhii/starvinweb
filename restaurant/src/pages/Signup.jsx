import React, { useState } from 'react';
import '../css/Signup.css'; // Import the CSS file for the restaurant-themed styles

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here, e.g., sending data to a server.
    // For simplicity, we'll just display a message for successful login.
    alert('Sign up successful!');
  };

  return (
    <div>
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>
          Star'<span>Vin</span>
        </div>
      </div>
      <br />
      <div class="login">
        <input type="text" placeholder="Email" name="email"/>
        <br /><br></br>
        <input type="text" placeholder="username" name="user" />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <input type="password" placeholder="confirm password" name="repeatpassword" />
        <br />
        <input type="button" value="Sign up" />
        
      </div>
    </div>
  );
};

export default Signup;

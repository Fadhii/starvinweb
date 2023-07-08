import React, { useState } from "react";
import "../css/Login.css"; // Import the CSS file for the restaurant-themed styles
import {Link} from 'react-router-dom'

const Login = () => {


  return (
    <div className="main-div3">
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>
          Star'<span>Vin</span>
        </div>
      </div>
      <br />
      <div class="login">
        <form action="POST">
          <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email" name="" />
          <br />
          <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" name="" />
          <br />
          <input type="submit" value="" />
          <div class="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "../css/Login.css"; // Import the CSS file for the restaurant-themed styles
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post("http://localhost:4578/login",{
        email,password
      })
      .then(res=>{
        if(res.data==="exist"){
          history("/welcome", {state:{id:email}});
        }
        else if(res.data==="notexist"){
          alert("User does not exist");
        }
      })
      .catch(e=>{
        alert("Wrong details");
        console.log(e);
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-div6">
      <div class="body"></div>
  
      <div class="header">
        <div>
          Login
        </div>
      </div>
      <br />
      <div class="login">
        <form action="POST">
          <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email"/>
          <br />
          <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
          <br />
          <input type="button" onClick={submit} value="Login"/>
          <div class="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

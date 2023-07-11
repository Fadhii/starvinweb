import React, { useState } from 'react';
import '../css/Signup.css'; // Import the CSS file for the restaurant-themed styles
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const history = useNavigate();

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post("http://localhost:4578/signup",{
        email,password,userName
      })
      .then(res=>{
        if(res.data==="exist"){
          alert("User already exists");
        }
        else if(res.data==="notexist"){
          history("/welcome", {state:{id:userName}});
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
    <div>
      <div class="body2"></div>
      <div class="header">
        <div>
          Sign Up
        </div>
      </div>
      <br />
      <div class="login">
      <form action="POST">
          <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email" name="" />
          <br />
          <input type="text" onChange={(e) => {setUserName(e.target.value)}} placeholder="username" name="" />
          <br />
          <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" name="" />
          <br/>
          <input type="button" onClick={submit} value="Sign Up"/>
          <div class="signup-link">
           Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Signup;

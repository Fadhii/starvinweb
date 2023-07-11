import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";


export default function App() {
  return (
    <>
      <SideNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        

        
      </Routes>

    </>
  );
}

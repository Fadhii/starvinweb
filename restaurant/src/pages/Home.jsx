import React from "react";
import "../css/Home.css"
import {useNavigate, useLocation} from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate();
  const navigateToReserv = () => {
    navigate('/reservation');
  };

  const navigateToMenu = () => {
    navigate('/menu');
  };

  const location = useLocation();

  return (

    <>
      <div className="main-div">
          <h1 className="title">Star'vin?</h1>
          <h3 className="sub-title">You're in the right place</h3>
          <div className="buttons">
            <button className="button" onClick={navigateToReserv}>Reserve your seat now</button>
            <button className="button" onClick={navigateToMenu}>View Menu</button>
          </div>
      </div>
    </>
  );
}

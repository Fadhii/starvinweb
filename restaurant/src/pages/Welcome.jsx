import React from "react";
import "../css/Welcome.css"
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
      <div className="main-div7">
          <h1 className="title7">Welcome {location.state.id}, to our restaurant</h1>
          <h3 className="sub-title7">Select option from below.</h3>
          <div className="buttons7">
            <button className="button7" onClick={navigateToReserv}>Reserve your seat now</button>
            <button className="button7" onClick={navigateToMenu}>View Menu</button>
          </div>
      </div>
    </>
  );
}

import React from "react";
import "./SideNav.css";
import { Link} from "react-router-dom";
import { NavbarData } from "./NavbarData";

export default function SideNav() {


  return (
    <>
      <div className="img-div">
        <img src="../images/image1.jpg" alt="" />
      </div>
      <div className="wrap">
      </div>
      <div className="sidenav">
      <a href="/" className="brand">Star'vin</a>
        <div className="nav-links">
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className="list-items">
              <Link to={item.path} activeStyle={{ backgroundColor: '#349eff' }} className="links">{item.title}</Link>
            </li>
          )
        })}
        </div>

        <p className="copyright">© Star'vin</p>
      </div>
    </>
    
  );
}

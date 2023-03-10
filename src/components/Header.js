import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 d-flex justify-content-between ">
        
        <div className="flexi mt-3 ">

       
        
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        
          <ul className="navbar-nav fs-5 ">
          <span className="navbar-brand text-primary fs-2">ABC Inc</span>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dev">
                Devlopers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
       

        </div>
          

        <div className="allbtn">
          <button className="btn btn-primary mx-3">Login</button>
          <Link to="/register">
            <button className="btn btn-outline-primary">Register</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;

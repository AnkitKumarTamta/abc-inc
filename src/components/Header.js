import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        
          <span className="navbar-brand text-primary fs-2">ABC Inc</span>
        
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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

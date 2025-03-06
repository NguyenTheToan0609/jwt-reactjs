import React, { useState, useContext } from "react";
import "./nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const Nav = (props) => {
  const location = useLocation();
  const { user } = useContext(UserContext);

  if ((user && user.isAuthenticated === true) || location.pathname === "/") {
    return (
      <>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand " to="/">
              JWT React
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/" exact>
                    Home <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Nav;

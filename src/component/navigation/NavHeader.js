import React, { useState, useContext } from "react";
import "./nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavHeader = (props) => {
  const location = useLocation();
  const { user, logout } = useContext(UserContext); // Assuming you have a logout function

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
                <li className="nav-item">
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
                  <NavLink className="nav-link" to="/projects">
                    Project
                  </NavLink>
                </li>
              </ul>
              {/* Push the Settings dropdown to the right */}
              <ul className="navbar-nav ms-auto">
                <Nav.Link>Welcome Toan !</Nav.Link>
                <li className="nav-item">
                  <NavDropdown title="Settings">
                    <NavDropdown.Item>Change Password</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
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

export default NavHeader;

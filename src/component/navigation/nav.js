import React, { useState } from "react";
import "./nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = (props) => {
  const [isShow, setIsShow] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      setIsShow(false);
    }
  }, []);

  return (
    <>
      {isShow === true && (
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
      )}
    </>
  );
};

export default Nav;

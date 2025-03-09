import React, { useState, useContext } from "react";
import "./nav.scss";
import { NavLink, useLocation, Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { userLogOut } from "../../service/userService";
import { toast } from "react-toastify";

const NavHeader = (props) => {
  const location = useLocation();
  const history = useHistory();
  const { user, logout } = useContext(UserContext);

  const handleLogOut = async () => {
    let res = await userLogOut();
    logout();
    if (res && +res.EC === 0) {
      toast.success("Logout success");
      history.push("/login");
    } else {
      toast.error("Logout error");
    }
  };

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
              {user && user.isAuthenticated === true ? (
                <ul className="navbar-nav ms-auto">
                  <Nav.Link>Welcome {user.account.username}!</Nav.Link>
                  <li className="nav-item">
                    <NavDropdown title="Settings">
                      <NavDropdown.Item>Change Password</NavDropdown.Item>
                      <NavDropdown.Item>
                        <span onClick={handleLogOut}>Log Out</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              ) : (
                <Link className="nav-link ms-auto login" to="/login">
                  Login
                </Link>
              )}
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

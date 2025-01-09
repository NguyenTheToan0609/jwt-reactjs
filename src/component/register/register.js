import React from "react";
import "./register.scss";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  let history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className="register-container">
      <div className="container">
        <div className="row">
          {/* <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">FULLSTACK - JWT</div>
            <div className="detail">
              Connect with friends and the world around you
            </div>
          </div> */}

          <div className="content-right col-sm-5 col-12">
            <div className="brand">Register</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>User Name:</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="User name"
              />
            </div>
            <div className="form-group">
              <label>Phone number:</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Re-Password:</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Re-Password"
              />
            </div>

            <button className="btn btn-primary">Register</button>

            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already an have account . Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

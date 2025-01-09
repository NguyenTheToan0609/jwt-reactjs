import React from "react";
import "./login.scss";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  let history = useHistory();

  const handleCreateAccount = () => {
    history.push("/register");
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">FULLSTACK - JWT</div>
            <div className="detail">
              Connect with friends and the world around you
            </div>
          </div>

          <div className="content-right col-sm-5 col-12">
            <div className="brand d-sm-none  ">Login</div>
            <input
              type="text"
              className="form-control"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center ">
              <a className="forgot-password" href="#">
                Forgot password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleCreateAccount()}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { isValidElement, useState } from "react";
import "./login.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../../service/userService";

const Login = (props) => {
  let history = useHistory();

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaultValidInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  const handleCreateAccount = () => {
    history.push("/register");
  };

  const handleLogin = async () => {
    setObjCheckInput(defaultValidInput);
    if (!valueLogin) {
      setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });
      toast.error("Chua nhap email hoac so dien thoai");
      return;
    }
    if (!password) {
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

      toast.error("Chua nhap mat khau");
      return;
    }

    let dataUser = await userLogin(valueLogin, password);
    if (dataUser && dataUser.data && dataUser.data.EC === 0) {
      toast.success(dataUser.data.EM);
      let data = { isAuthenticated: true, token: "token fake" };
      sessionStorage.setItem("account", JSON.stringify(data));
      history.push("/users");
    }

    if (dataUser && dataUser.data && dataUser.data.EC !== 0) {
      toast.error(dataUser.data.EM);
    }
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
              className={
                objCheckInput.isValidValueLogin
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email or phone number"
              value={valueLogin}
              onChange={(event) => setValueLogin(event.target.value)}
            />
            <input
              type="password"
              className={
                objCheckInput.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Login
            </button>
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

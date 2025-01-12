import React, { useEffect, useState } from "react";
import "./register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = (props) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidUsername: true,
    isValidPhone: true,
    isValidPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  const handleLogin = () => {
    history.push("/login");
  };

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!email) {
      toast.error("Chưa nhập email");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      toast.error("Không đúng đinh dạng email");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });

      return false;
    }
    if (!userName) {
      toast.error("Chưa nhập tên");
      setObjCheckInput({ ...defaultValidInput, isValidUsername: false });
      return false;
    }
    if (!phone) {
      toast.error("Chưa nhập số điện thoại");
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }
    if (!password) {
      toast.error("Chưa nhập mật khẩu");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không trùng khớp");
      return false;
    }

    return true;
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
      console.log("check data ", data);
    });
  }, []);

  const handleRegister = () => {
    let check = isValidInputs();
    let dataUser = { email, userName, phone, password, confirmPassword };
    if (check === true) {
      axios.post("http://localhost:8080/api/v1/register", {
        email,
        userName,
        phone,
        password,
      });
    }
    console.log("check data ", dataUser);
  };

  return (
    <div className="register-container">
      <div className="container">
        <div className="row">
          <div className="content-right col-sm-5 col-12">
            <div className="brand">Register</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className={
                  objCheckInput.isValidEmail
                    ? "form-control mt-2 is-valid"
                    : "form-control mt-2 is-invalid"
                }
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>User Name:</label>
              <input
                type="text"
                className={
                  objCheckInput.isValidUsername
                    ? "form-control mt-2 is-valid"
                    : "form-control mt-2 is-invalid"
                }
                placeholder="User name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>phone number:</label>
              <input
                type="text"
                className={
                  objCheckInput.isValidPhone
                    ? "form-control mt-2 is-valid"
                    : "form-control mt-2 is-invalid"
                }
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className={
                  objCheckInput.isValidPassword
                    ? "form-control mt-2 is-valid"
                    : "form-control mt-2 is-invalid"
                }
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re-Password:</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Re-Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPasword(event.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>

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
import "./App.scss";
import Login from "./component/login/login";
import Nav from "./component/navigation/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/register/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./component/users/users";
import { useEffect, useState } from "react";
import _ from "lodash";

function App() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <Router>
      <div className="App-container">
        {account && !_.isEmpty(account) && account.isAuthenticated && <Nav />}

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/contact">contact</Route>
          <Route path="*">404 Not Found</Route>
        </Switch>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;

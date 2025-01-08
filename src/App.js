import "./App.scss";
import Login from "./component/login/login";
import Nav from "./component/navigation/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App-container">
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/about">About</Route>
            <Route path="/contact">contact</Route>
            <Route path="*">404 Not Found</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

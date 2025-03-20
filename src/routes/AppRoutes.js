import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../component/login/login";
import Register from "../component/register/register";
import Users from "../component/users/users";
import PrivateRoutes from "./PrivateRoutes";
import Project from "../component/Project/Project";
import About from "../component/About/About";
import Role from "../component/Role/Role";
import GroupRoles from "../component/GroupRoles/GroupRoles";
function AppRoutes(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          Home
        </Route>

        {/*         
        <Route exact path="/project">
          project
        </Route>

        <Route path="/users">
          <Users />
        </Route> */}

        <PrivateRoutes path="/users" component={Users} />
        <PrivateRoutes path="/projects" component={Project} />
        <PrivateRoutes path="/about" component={About} />
        <PrivateRoutes path="/roles" component={Role} />
        <PrivateRoutes path="/group-role" component={GroupRoles} />

        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="*">404 Not Found</Route>
      </Switch>
    </div>
  );
}

export default AppRoutes;

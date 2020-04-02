import React from "react";
import { Route, Switch } from "react-router-dom";

// PAGES
import Login from "../pages/auth/Login";
import PasswordReset from "../pages/auth/PasswordReset";

const fourtOFour = () => <h1 className="text-center">404</h1>;

class AuthRoutes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/password-reset" exact component={PasswordReset} />
        <Route component={fourtOFour} />
      </Switch>
    );
  }
}

export default AuthRoutes;

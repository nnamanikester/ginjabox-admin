import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// PAGES
import Login from "../pages/auth/Login";
import PasswordReset from "../pages/auth/PasswordReset";

const fourtOFour = () => <h1 className="text-center">404</h1>;

class AuthRoutes extends React.Component {

  render() {
    return (
      <Switch>
        <main style={{ margin: "8rem 6% 6rem" }}>
          <Route path="/login" exact component={Login} />
          <Route path="/password-reset" exact component={PasswordReset} />
          <Route render={() => {
            return <Redirect to="/login" />
          }} />
        </main>
      </Switch>
    );
  }
}

export default AuthRoutes;

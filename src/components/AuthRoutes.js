import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// PAGES
import Login from "../pages/auth/Login";
import PasswordReset from "../pages/auth/PasswordReset";
import NewPassword from "../pages/auth/NewPassword";

const FourToFour = () => <h1 className="text-center">404</h1>;

class AuthRoutes extends React.Component {

  render() {
    return (
      <main style={{ margin: "8rem 6% 6rem" }}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/password-reset" exact component={PasswordReset} />
          <Route path="/password-reset/:token" exact component={NewPassword} />
          <Route render={() => {
            return <Redirect to="/login" />
          }} />
        </Switch>
      </main>
    );
  }
}

export default AuthRoutes;

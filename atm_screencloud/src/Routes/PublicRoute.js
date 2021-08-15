/*
Public route used by the login page so that any user not already logged in can 
view this page and then login. If login is successful then the user will be redirected
to their account page.
*/ import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../UserContext";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(UserContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        authenticated ? (
          <Redirect to="/accountpage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

/*
Private route that checks if the user is authenticated. If true then the private route
is accessed. If not then the user is redirected to the login page
*/ import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../UserContext";
export const PrivateRoute = ({ path, component: Component, ...rest }) => {
  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { loggedIn } = userLogin;
  const { authenticated } = useContext(UserContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        !authenticated ? (
          <>
            <Redirect to="/" />
          </>
        ) : (
          <div>
            <Component {...props} />
          </div>
        )
      }
    />
  );
};
export default PrivateRoute;

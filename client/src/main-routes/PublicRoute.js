import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/auth';

const PublicRoute = ({ component: Component,restricted, ...rest }) => {
  const userAuthenticated = restricted && isLogin();
  return(
    <Route {...rest}
    render={props => userAuthenticated ?  <Redirect to="/" /> : <Component {...props} />}
    />
  );
}

export default PublicRoute;
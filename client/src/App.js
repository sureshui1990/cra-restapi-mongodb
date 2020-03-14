import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import PrivateRoute from './main-routes/PrivateRoute';
import PublicRoute from './main-routes/PublicRoute';
import Dashboard from './pages/Dashboard';
import LoginContainer from './containers/login/Login.container';
import SignUpContainer from './containers/signup/SignUp.container';
import NoMatch from './pages/NoMatch';
import history from './utils/history';

const App =  () => {
  return (
    <section className="main-node">
      <Router history={history}>
          <Switch>
             <PublicRoute restricted={false} exact path="/" component={Dashboard} />
             <PublicRoute restricted={true} exact path="/login" component={LoginContainer} />
             <PublicRoute restricted={true} exact path="/signup" component={SignUpContainer} />
             <PrivateRoute path="/dashboard" component={Dashboard} />
             <PrivateRoute exact component={NoMatch} />
          </Switch>
        </Router>
      </section>
  );
}

export default App;

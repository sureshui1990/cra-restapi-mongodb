import React from 'react';
import './App.css';
import { Router, Switch} from 'react-router-dom';
import PrivateRoute from './main-routes/PrivateRoute';
import PublicRoute from './main-routes/PublicRoute';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import UserList from './pages/UserList';
import User from './pages/User';
import LoginContainer from './containers/login/Login.container';
import SignUpContainer from './containers/signup/SignUp.container';
import NoMatch from './pages/NoMatch';
import history from './utils/history';

const App =  () => {

  return (
    <section>
      <Router history={history}>
          <Switch>
             <PublicRoute restricted={false} exact path="/" component={Home} />
             <PublicRoute restricted={true} exact path="/login" component={LoginContainer} />
             <PublicRoute restricted={true} exact path="/signup" component={SignUpContainer} />
             <PrivateRoute exact path="/main" component={MainPage} />
             <PrivateRoute exact path="/userlist" component={UserList} />
             <PrivateRoute exact path="/user" component={User} />
             <PrivateRoute exact path="/404" component={NoMatch} />
             <PrivateRoute exact component={NoMatch} />
          </Switch>
        </Router>
      </section>
  );
}

export default App;

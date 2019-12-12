import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import PrivateRoute from './main-routes/PrivateRoute';
import PublicRoute from './main-routes/PublicRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginContainer from './containers/login/Login.container';
import SignUpContainer from './containers/signup/SignUp.container';


const App =  () => {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Register</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          </nav>
          <Switch>
             <PublicRoute restricted={false} exact path="/" component={Home} />
             <PublicRoute restricted={true} exact path="/login" component={LoginContainer} />
             <PublicRoute restricted={true} exact path="/signup" component={SignUpContainer} />
             <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
        
      </header>
    </div>
  );
}

export default App;

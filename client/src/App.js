import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { AuthContext } from './context/auth';
import LoginContainer from './containers/login/Login.container';
import SignUpContainer from './containers/signup/SignUp.container';


const App =  () => {

  const [ authTokens, setAuthTokens ] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens}}>
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
            <Link to="/admin">Admin</Link>
            </li>
          </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <PrivateRoute path="/admin" component={Admin} />
        </Router>
        </AuthContext.Provider>
        {/* <LoginContainer /> */}
        
      </header>
    </div>
  );
}

export default App;

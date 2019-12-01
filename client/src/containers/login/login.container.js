import React, { Component } from 'react';
import axios from 'axios';
import { MDBBtn } from "mdbreact";

export default class LoginContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password:'',
             loginResponse:{}
        }
    }
    
    handleOnChange = event => {
        console.log('e', event.target.value);
        this.setState({ [event.target.name] : event.target.value });
    }

    handleLoginSumbit = () => {
        const { email, password } = this.state;
        const reqBody = { email,password };
        axios.post(`http://localhost:4949/api/user/login`, reqBody)
      .then(res => {
        this.setState({loginResponse:res});
      }).catch((error) => {
        this.setState({loginResponse:error});
      });;
    };

    render() {
        console.log('this.state',this.state);
        const { email, password } = this.state;
        const valMailPassword = email || password;
        return (
            <React.Fragment>
              <div className="login-form-container">
                <form>
                    <div>
                    <h3>Login</h3>

                        <div className="form-group">
                            <label htmlFor="UsernameInput">Username</label>
                            <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="UsernameInput"
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PasswordInput">Password</label>
                            <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="PasswordInput"
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div>
                            <MDBBtn type="button" 
                            color="primary" 
                            disabled={!valMailPassword}
                            onClick={this.handleLoginSumbit}>Login</MDBBtn>
                        </div>

                    </div>    
                </form>    
              </div>  
            </React.Fragment>
        )
    }
}

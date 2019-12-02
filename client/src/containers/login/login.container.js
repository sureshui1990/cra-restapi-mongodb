import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCol } from 'mdbreact';
import { useAuth } from '../../context/auth';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password:'',
             isLoggedIn:false,
             isError:false,
             loginResponse:{}
        }
    }
    
    handleOnChange = event => {
        console.log('e', event.target.value);
        this.setState({ [event.target.name] : event.target.value });
    }

    handleLoginSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;
        this.setState({ error: false });
        axios.post(`http://localhost:4949/api/user/login`, { email,password })
        .then(res => {
          if(res.status === 200){
            this.setState({isLoggedIn:true,isError:false});
            useAuth.setAuthTokens(res.data);
            console.log('res if',res);
         }else{
            const error = new Error(res.error);
            console.log('res else');
            this.setState({isError:true,isLoggedIn:false});
            throw error;
        }
      }).catch((error) => {
        this.setState({loginResponse:error});
        console.log('catch');
      });;
    };

    render() {
        console.log('this.state',this.state);
        const { email, password ,isLoggedIn, isError } = this.state;

        if(isError){
           return  <div className="login-form-container">Error, something is wrong</div>;
        }
        if(isLoggedIn){
            return <div className="login-form-container">Home page</div>;
        }
        return (
            <React.Fragment>
              <div className="login-form-container">
                <form>
                <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                <MDBCardBody>

                        <div className="form-group">
                            <MDBInput
                            label="Username"
                            type="text"
                            name="email"
                            onChange={this.handleOnChange}
                            value={email}
                            />
                        </div>
                        <div className="form-group">
                            <MDBInput
                            label='Password'
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleOnChange}
                            value={password}
                            />
                        </div>
                        <div>
                            <MDBBtn type="button" 
                            color="primary"
                            onClick={this.handleLoginSubmit}>Login</MDBBtn>
                        </div>
                        <div className="border border-info p-2 mt-3">
                        <Link to="/signup">Don't you have an account ?</Link>
                        </div>
                        </MDBCardBody>
                        </MDBCard>
                        </MDBCol> 
                </form>    
              </div>  
            </React.Fragment>
        )
    }
}

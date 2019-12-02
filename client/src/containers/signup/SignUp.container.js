import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCol } from 'mdbreact';

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

    handleLoginSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        // const { history} = this.props;
        this.setState({ error: false });

        axios.post(`http://localhost:4949/api/user/login`, { email,password })
      .then(res => {
          if(res.status === 200){
            //   this.props.history.push('/');
            // this.setState({loginResponse:res});
            console.log('res if',res);
        }else{
            const error = new Error(res.error);
            console.log('res else');
            throw error;
        }
      }).catch((error) => {
        this.setState({loginResponse:error});
        console.log('catch');
      });;
    };

    render() {
        console.log('this.state',this.state);
        console.log('this.props',this.props);
        const { name, email, password } = this.state;

        return (
            <React.Fragment>
              <div className="login-form-container">
                <form>
                <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                <MDBCardBody>
                        <div className="form-group">
                            <MDBInput
                            label="Name"
                            type="text"
                            name="name"
                            className="form-control"
                            id="UsernameInput"
                            value={name}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group">
                            <MDBInput
                            label="Email"
                            type="text"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group">
                            <MDBInput
                            label="Password"
                            type="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div>
                            <MDBBtn type="button" 
                            color="secondary    "
                            onClick={this.handleLoginSubmit}>Register</MDBBtn>
                        </div>

                        <div className="border border-info p-2 mt-3">
                        <Link to="/login">Already have an account?</Link>
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

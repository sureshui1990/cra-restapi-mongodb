import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button, TextField, Container,Card,CardContent } from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import { Login } from '../../utils/auth';

const err = red.A700;

export default class LoginContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password:'',
             error:false
        }
    }
    
    handleOnChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }
    handleLoginSumbit = () => {
        const { email, password } = this.state;
        const reqBody = { email,password };
        axios.post(`http://localhost:4949/api/user/login`, reqBody)
      .then(response => {
        this.setState({success:response}, ()=>this.userLogin(response.data["auth-token"]));
      }).catch((error) => {
        if(error){
            this.setState({error:error.response.data});
        }
      });;
    };
    userLogin = (token) => {
        Login(token);
        this.props.history.push('/dashboard');
    }
    render() {
        const {email,password,error } = this.state;
        const isSubmitDisable = (email === "") || (password === "");
        console.log('this.state',this.state);
        const {formateError,emailError,passwordError,message } = error;

        return (
            <React.Fragment>
                <Container maxWidth="xs">
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <Grid item xs={12} sm={10}>
                <form noValidate autoComplete="off">
                      <TextField
                            label="Email" type="text" margin="dense"
                            size="small" fullWidth
                            autoFocus={true} name="email"
                            required={true} value={email}
                            onChange={this.handleOnChange}
                            error={emailError}
                            helperText={emailError && `${message}`}
                            />
                        <TextField
                            label="Password" style={{margin:'1em 0'}}
                            type="password" margin="dense"
                            fullWidth name="password" value={password}
                            onChange={this.handleOnChange}                        
                            error={passwordError}
                            helperText={passwordError && `${message}`}
                            />
                            <div>
                            <Button color="primary"
                            disabled={isSubmitDisable}
                            fullWidth
                            variant="contained" onClick={this.handleLoginSumbit}
                            type="button">Login</Button>
                        </div>

                        {formateError && <p style={{color:err}}>{message}</p>}
   
                </form>    
                </Grid>
                </Grid>
                </CardContent>
                    </Card>
               </Container>
            </React.Fragment>
        )
    }
}

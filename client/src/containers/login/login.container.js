import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button, TextField, Container,Card,CardContent } from '@material-ui/core';
import { Login } from '../../utils/auth';


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
    userLogin = () => {
        Login();
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <React.Fragment>
                <Container maxWidth="xs">
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <Grid item xs={12} sm={10}>
                <form noValidate autoComplete="off">
                      <TextField
                            label="Username" 
                            type="text" margin="dense"
                            // variant="filled"
                            size="small" fullWidth
                            autoFocus={true} 
                            required={true}
                            onChange={this.handleOnChange}
                            />
                        <TextField
                            label="Password" 
                            style={{margin:'1em 0'}}
                            type="password" margin="dense"
                            // variant="filled"
                            fullWidth
                            required={true}
                            onChange={this.handleOnChange}
                            />
                            <div>
                            <Button color="primary" fullWidth
                            variant="contained" onClick={this.userLogin}
                            type="button">Login</Button>
                        </div>
   
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

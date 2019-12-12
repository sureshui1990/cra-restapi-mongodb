import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField, Container,Card,CardContent } from '@material-ui/core';

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
            <React.Fragment> <Container maxWidth="xs">
            <Card>
                <CardContent>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={10}>
        <form noValidate autoComplete="off">
        <TextField
                    label="Name" 
                    type="text" margin="dense"
                    // variant="filled"
                    size="small" fullWidth
                    autoFocus={true} 
                    required={true}
                    onChange={this.handleOnChange}
                    />
              <TextField
                    label="email" 
                    type="mail" margin="dense"
                    // variant="filled"
                    size="small" fullWidth
                    required={true}
                    onChange={this.handleOnChange}
                    />
                <TextField
                    label="Password" 
                    type="password" margin="dense"
                    // variant="filled"
                    fullWidth
                    required={true}
                    onChange={this.handleOnChange}
                    />
                    <div
                    style={{margin:'1em 0'}}>
                    <Button color="secondary" fullWidth
                    variant="contained" onClick={this.userLogin}
                    type="button">Register</Button>
                </div>
                <Link to="/login">Already have an account</Link>

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

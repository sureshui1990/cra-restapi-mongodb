import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField, Container,Card,CardContent,Typography } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { UserRegisterUrl } from '../../constants';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email: '',
             password:'',
             error:false,
             success:false
        }
    }
    
    handleOnChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    registerApiCall = () => {
        const { email, password,name } = this.state;
        axios.post( UserRegisterUrl , { email,password,name })
        .then(response => {
            this.setState({success:response.data,error:false},() => () =>this.resetFormData);
          }).catch((error) => {
              if(error){
                  this.setState({error:error.response.data,success:false});
              }
         });
    }
    resetFormData = () => {
        this.setState({name:'',password:'',email:''})
    }
    handleLoginSubmit = event => {
        event.preventDefault();
        this.registerApiCall();
    };

    render() {
        
        const {name,email,password,error,success } = this.state;
        const isSubmitDisable = (name === '') ||(email === "") || (password === "");
        
        const { formateError,message,mailExist } = error;
        const { uniqueId,successMessage } = success;

        return (
            <main className="main">
                <Container maxWidth="xs">
                    <Card>
                    <CardContent>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={10}>
         <form noValidate autoComplete="off">
        <TextField
                    label="Name" 
                    type="text" margin="dense"
                    name="name"
                    size="small" fullWidth
                    autoFocus={true} 
                    value={name}
                    required={true}
                    onChange={this.handleOnChange}
                    />
              <TextField
                    label="Email" 
                    type="mail" margin="dense"
                    name="email"
                    size="small" fullWidth
                    required={true}
                    value={email}
                    onChange={this.handleOnChange}
                    error={mailExist}
                    helperText={mailExist && `${message}`}
                    />
                <TextField
                    label="Password" 
                    type="password" margin="dense"
                    name="password"
                    fullWidth
                    required={true}
                    value={password}
                    onChange={this.handleOnChange}
                    />
                    <div
                    style={{margin:'1em 0'}}>
                    <Button color="secondary" fullWidth
                    disabled={isSubmitDisable}
                    variant="contained" onClick={this.handleLoginSubmit}
                    type="button">
                        <GroupAddIcon />
                        Register</Button>
                </div>
                {formateError && <p>{message}</p>}
                {success && <p>{`${successMessage}. User unique-id is ${uniqueId}`}</p>}
               <Typography aligncenter="center" align="center" justify="center" component="div">
               <Link to="/login">
                    <AccountTreeIcon />
                    Already have an account</Link>
                    </Typography>

        </form>    
        </Grid>
        </Grid>
        </CardContent>
            </Card>
       </Container>
            </main>
        )
    }
}

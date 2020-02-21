import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Grid,Segment, Button,Form, Message } from 'semantic-ui-react';
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
        
        const { formateError,message } = error;
        const { uniqueId,successMessage } = success;

        return (
            <main className="main">
                <Container>
                <Grid columns={3} centered>
                         <Grid.Column>
                         <Segment>
                         <Form noValidate autoComplete="off">
                    <Form.Field>
                        <label>Name</label>
                        <input type="text"
                    name="name" size="small"  
                    value={name} onChange={this.handleOnChange}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Email</label>
                    <input type="text"
                    name="email" size="small" 
                     value={email}
                    onChange={this.handleOnChange}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                <input
                    label="Password" 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleOnChange}
                    />
                    </Form.Field>
                    <div
                    style={{margin:'1em 0'}}>
                    <Button size="small"
                    disabled={isSubmitDisable} onClick={this.handleLoginSubmit}
                    type="button">
                        Register</Button>
                </div>

                {formateError && <Message color="red">{message}</Message>}
                {success && <p>{`${successMessage}. User unique-id is ${uniqueId}`}</p>}
               <div>
               <Link to="/login"> Already have an account</Link> </div>

        </Form>
        </Segment>
        </Grid.Column>
            </Grid>
       </Container>
            </main>
        )
    }
}

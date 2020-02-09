import React, { Component } from 'react';
import { Grid, Button, Container,Card,CardContent ,List,ListItem  } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import axios from 'axios';
import { getAuthToken } from '../utils/auth.js';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    
    getUserList = () => {
        axios.get(`http://localhost:4949/api/user`, {headers: {'auth-token':getAuthToken() }})
      .then(response => {
        this.setState({list:response.data});
      }).catch((error) => {
        if(error){
            this.setState({error:error.response.data});
        }
      });;
    };
    
    render() {
        const {list } = this.state;

        return (
            <React.Fragment>
                <Container maxWidth="md">
                    <Button color="secondary" variant="contained" onClick={this.getUserList}>Get List</Button>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <Grid item xs={12} sm={10}>
                                <List>
                                    
                                        {list && list.map( user => {
                                            return <ListItem key={user._id}>
                                                    <ListItemIcon>
                                                    <FolderIcon />
                                                    </ListItemIcon>
                                                <ListItemText  primary={`Name: ${user.name} ||  Email: ${user.email}`} />
                                            </ListItem>
                                        })}
                                    </List>
                                </Grid>
                            </Grid>
                </CardContent>
                    </Card>
               </Container>
            </React.Fragment>
        )
    }
}

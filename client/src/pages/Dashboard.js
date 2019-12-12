import React from 'react';
import { Button, Container } from '@material-ui/core';
import { Logout } from '../utils/auth';

export default (props) => {
    const logout = () => {
        Logout();
        props.history.push('/login');
    }
    return (
        <Container>
            <h3>Dashboard page</h3>

            <Button color="primary"
            variant="contained"
            onClick={logout}
            > Logout</Button>
            
        </Container>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Typography } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <Typography variant='inherit' component="h2" align='center'>
            Welcome to the application
            </Typography>

            <Typography variant='inherit' component="p" align='center'>
                Public page where anauthenticated user can view this page.
            </Typography>
            <Typography variant='inherit' component="div" align='center'>
             <Link to="/dashboard">Dashboard</Link>
            </Typography>
            
        </Container>
    )
};
export default Home;

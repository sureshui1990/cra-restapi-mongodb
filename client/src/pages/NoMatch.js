import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotFound from '../assets/images/page-404.png';

const NoMatch = ({location}) => {
    return <main className="main">
        <Container>
            <Typography component="div" align='center'>
                <img src={NotFound} alt="not found" title="404 page" className="not-found-img" />
            </Typography>
        <Typography variant='inherit' component="h3" align='center'>
            No match for <code>{location.pathname}</code>
         </Typography>
         <Typography variant='inherit' component="div" align='center'>
             <Link to="/dashboard"> <DashboardIcon /> Dashboard</Link>
         </Typography>
        </Container>
    </main>
};
export default NoMatch;
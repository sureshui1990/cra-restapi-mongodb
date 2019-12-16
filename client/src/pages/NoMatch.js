import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

const NoMatch = ({location}) => {
    return <React.Fragment>
        <Container>
        <Typography variant='inherit' component="h3" align='center'>
            No match for <code>{location.pathname}</code>
         </Typography>
         <Typography variant='inherit' component="div" align='center'>
             <Link to="/dashboard"> <DashboardIcon /> Dashboard</Link>
         </Typography>
        </Container>
    </React.Fragment>
};
export default NoMatch;
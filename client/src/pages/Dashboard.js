import React from 'react';
import { Button, Container,AppBar,Toolbar,Typography, Menu } from '@material-ui/core';
import { Logout } from '../utils/auth';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserList from './UserList';
import Drawer from '../containers/drawer/Drawer.container';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default (props) => {
    const classes = useStyles();
    const [profileMenu, setProfileMenu] = React.useState(null);
    const isOpen = Boolean(profileMenu);
    const logout = () => {
        Logout();
        props.history.push('/login');
    }
    const ShowDrawerBar = () => {
      console.log('ss');
    }
    const handleMenu = event => {
        setProfileMenu(event.currentTarget)
    }
    const handleMenuClose = () => {
        setProfileMenu(null)
    }
    return (<>
    <AppBar position="static">
    <Toolbar>
    <Drawer />
    <Typography variant="h6" className={classes.title} >
            Menus
          </Typography>
          
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={profileMenu}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}              
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={isOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
    </Toolbar>
    </AppBar>

    <section>
        <Container>

          

            <Button color="primary"
            variant="outlined"
            >
                <Link to="/user">User list</Link>
            </Button>
                <UserList ></UserList>
            

        </Container>
    </section> 
        </>
    )
}

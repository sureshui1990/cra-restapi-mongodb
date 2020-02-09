import React from 'react';
import { Container,AppBar,Toolbar,Typography, Menu } from '@material-ui/core';
import { Logout } from '../utils/auth';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
            <h3>Dashboard</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </Container>
    </section> 
        </>
    )
}

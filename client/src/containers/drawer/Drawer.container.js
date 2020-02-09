import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Logout } from '../../utils/auth';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuDrawer() {
  const classes = useStyles();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

   const toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(!isMenuOpen);
  };

  const SideMenuBar = () => (
    <div className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List to="">
      
      <Link to='Userlist'>
      <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary='User list' />
      </ListItem>
      </Link>

      </List>
      <Divider />
      <List>
        {['Dashboard', 'Logout'].map((text, index) => (
          <ListItem button key={text}
          onClick={ (text === 'Logout') &&  Logout}
          >
            <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <ExitToAppIcon  /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer()} ></MenuIcon>
        </IconButton>
      <Drawer open={isMenuOpen} onClose={toggleDrawer()}>
         <SideMenuBar />
      </Drawer>
    
    </div>
  );
}

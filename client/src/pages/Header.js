import React from 'react';
import { Image,Container,Dropdown,Grid} from 'semantic-ui-react';
import { Logout } from './../utils/auth';

const Logo = () => {
    return <>
            <Image src='https://www.pngitem.com/pimgs/m/32-323727_four-arms-from-ben-10-hd-png-download.png'
            circular={true} 
            alt="" title="s" size='tiny' />
          </>
}
const MyAccount = () => {
    return <>
      <Dropdown text='My Account'>
          <Dropdown.Menu>
          <Dropdown.Item text='My Details' />
          <Dropdown.Item text='Change Profile image' />
          <Dropdown.Item text='Change Password' />
          <Dropdown.Divider />
          <Dropdown.Item text='Logout' onClick={Logout} />
         </Dropdown.Menu>
      </Dropdown>
          </>
}
const Header = () => {
           return (
            <header>
                <Container>
                    <Grid>
                    <Grid.Column floated='left' width={3} verticalAlign="middle">
                    <Logo />
                    </Grid.Column>
                    <Grid.Column floated='right' width={5} verticalAlign="middle" textAlign="right">
                    <MyAccount />
                    </Grid.Column>
                    </Grid>
                </Container>
            </header>
        );
};
export default Header;

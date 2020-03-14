import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { Container,Icon,Menu,Sidebar} from 'semantic-ui-react';
import Header from './Header';
import Home from './Home';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical={true}
        visible={visible}
        width='thin'
      >
        
        <Menu.Item>
        <Link to="/dashboard/userlist" onClick={()=>setVisible(false)}>
          <Icon name='home' />
           User List
           </Link>
        </Menu.Item>
        
      </Sidebar>

      <Sidebar.Pusher>
        <Content toggleSideBarMenu={setVisible}/>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
};

const Content = (props) => {
  const { toggleSideBarMenu } = props;
  let match = useRouteMatch();
console.log('match',match);
    return (<>
    <section>
      <Header />
    <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li onClick={()=>toggleSideBarMenu(true)}>
            sidebar
        </li>
      </ul>
      
      <Container>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <h2>Choose the right one</h2>
        </Route>
        
        <Route path={match.path}>
          <Home />
        </Route>
        
      </Switch>
      </Container>
    </section> 
    </>
    )
}

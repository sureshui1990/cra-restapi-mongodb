import React from 'react';
import { Container } from '@material-ui/core';
import { Link, Switch,Route, useRouteMatch,useParams, BrowserRouter as Router } from 'react-router-dom';

export default () => {

    const { url,path } = useRouteMatch();

    return (
        <Container>
            <h3>User's</h3>

        <Router>
            <ul>
                <li>
                <Link to={`${url}/list`}>list</Link>
                </li>
            </ul>

            <Switch>
                <Route path={path} exact><h4>Please select one user</h4></Route>
                <Route path={`${path}/:userId`} exact>
                    <Topic />
                </Route>
            </Switch>
            </Router>
        </Container>
    )
}

const Topic = () => {
    let params = useParams();
    return <div>
<h4> asdfasd {params.userId}</h4>
    </div>
}
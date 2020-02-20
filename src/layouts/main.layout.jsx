import React, { useEffect } from 'react';
import queryString from 'query-string';
import { createBrowserHistory } from 'history';
import Requests from '../views/trip_requests/userTripRequests.view.jsx';
import Request from '../views/trip_requests/userTripRequest.view.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory({
    forceRefresh: true
})

const MainLayout = ({ match }) => {

    useEffect(() => {
        const query = queryString.parse(location.search);
        if (query.token) {
            localStorage.setItem('token', `Bearer ${token}`);
            history.push('/');
        }
    });

    return (
        <Router>
            <Switch>
                <Route path='/requests/:id' component={Request} />
                <Route path='/requests' component={Requests} />
            </Switch>
        </Router>
    );
}

export default MainLayout;
import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Header from '../components/Header'
import Browse from '../components/Browse';
import Book from '../components/Book';
import SignIn from '../components/SignIn';
import NotFoundPage from '../components/NotFoundPage';

// Client side routing component using React Router. No landing page as of now.
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Browse} exact={true} />
                <Route path="/book" component={Book}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/demo" component={Browse}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
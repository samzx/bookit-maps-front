import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Header from '../components/Header'
import Dashboard from '../components/Dashboard';
import Browse from '../components/Browse';
import Locate from '../components/Locate';
import Book from '../components/Book';
import SignIn from '../components/SignIn';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/browse" component={Browse}/>
                <Route path="/locate" component={Locate}/>
                <Route path="/book" component={Book}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
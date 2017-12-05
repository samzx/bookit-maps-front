import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/favicon.png';
import FA from 'react-fontawesome';

// Until authentication is implemented, default logged out.
let loggedIn = false;

const Header = (props) => (
    <div className="header" >
        <div className="">
            <h1 className="header-title"> BookIT Maps</h1>
        </div>
        <div className="nav-listing">
            {   
                /* Overview of user's bookings */
                loggedIn &&
                <NavLink to="/" className="nav-item" activeClassName="nav-item--is-active" exact={true} > 
                    <FA name="tachometer" className="nav-item__icon" />
                    Dashboard 
                </NavLink>
            }
            {
                /* Allows users to browse library maps, with users booking on sidebar, click to book */
                <NavLink to="/browse" className="nav-item" activeClassName="nav-item--is-active">
                    <FA name="map" className="nav-item__icon" />
                    Browse
                </NavLink>
            }
            {
                /* You can type the name of the computer, and will show you the location */
                <NavLink to="/locate" className="nav-item" activeClassName="nav-item--is-active">
                    <FA name="search" className="nav-item__icon" />
                    Locate
                </NavLink>
            }
            {
                /* Choose a library and book a computer with timelines */
                loggedIn && 
                <NavLink to="/book" className="nav-item" activeClassName="nav-item--is-active">
                    <FA name="bookmark" className="nav-item__icon" />
                    Book
                </NavLink>
            }
        </div>
        {
            /* Allows users to sign out. Possibly settings (profile) in future */
            loggedIn ?
            <NavLink to="/browse" className="nav-item nav-sign-out" onClick={() => loggedIn=false} >
                <FA name="sign-out" className="nav-item__icon" />
                Sign Out
            </NavLink>
            :
            <NavLink to="/sign-in" className="nav-item nav-sign-out" activeClassName="nav-item--is-active" onClick={() => loggedIn=true} >
                <FA name="sign-in" className="nav-item__icon" />
                Sign In
            </NavLink>
        }
    </div>
);

export default Header;
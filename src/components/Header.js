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
                /* Allows users to browse library maps, with users booking on sidebar, click to book */
                <NavLink to="/" className="nav-item" activeClassName="nav-item--is-active" exact={true} >
                    <FA name="map" className="nav-item__icon" />
                    <span className="nav-item__description" >Browse</span> 
                </NavLink>
            }
            {
                /* Choose a library and book a computer with timelines */
                loggedIn && 
                <NavLink to="/book" className="nav-item" activeClassName="nav-item--is-active">
                    <FA name="bookmark" className="nav-item__icon" />
                    <span className="nav-item__description" >Book</span> 
                </NavLink>
            }
        </div>
        {
            /* Allows users to sign out. Possibly settings (profile) in future */
            loggedIn ?
            <NavLink to="/" className="nav-item nav-sign-out" onClick={() => loggedIn=false} >
                <FA name="sign-out" className="nav-item__icon" />
                <span className="nav-item__description" >Sign Out</span> 
            </NavLink>
            :
            <NavLink to="/sign-in" className="nav-item nav-sign-out" activeClassName="nav-item--is-active" onClick={() => loggedIn=true} >
                <FA name="sign-in" className="nav-item__icon" />
                <span className="nav-item__description" >Sign In</span> 
            </NavLink>
        }
    </div>
);

export default Header;
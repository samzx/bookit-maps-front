import React from 'react';
import logo from '../images/favicon.png';

const Header = (props) => (
    <div className="header" >
        <div className="">
            <h1 className="header-title"> <img src={logo} className="logo"/>BookIT Maps</h1>
        </div>
        <div style={{margin: "auto", marginRight: 16}}>
            <a>Sign Out</a>
        </div>
    </div>
);

export default Header;
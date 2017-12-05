import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById("app"));

// Tools Section - Uncomment below to load tool. Click on a point to return x y values in console
// import LocationFinder from './tools/location-finder';
// ReactDOM.render(<LocationFinder />, document.getElementById("app"));
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from './actions/filters';
import { updateResources } from './actions/resources';
import selectResources from './selectors/resources';

import fetchResources from './fetch/resources';
import fetchBookings from './fetch/bookings';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// TEMP
    store.dispatch(setLibraryFilter("Baillieu"));
    store.dispatch(setFloorFilter("G"));
    store.dispatch(setTextFilter(""));
// TEMP

let jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Tools Section - Uncomment below to load tool. Click on a point to return x y values in console
    // import LocationFinder from './tools/location-finder';
    // jsx = <LocationFinder />

ReactDOM.render(jsx, document.getElementById("app"));

// Repeat call every minute - Called by map
    fetchResources(store);
    setInterval(() => fetchResources(store), 60000);

// TODO: Fix fetch bookings
    // fetchBookings(store);
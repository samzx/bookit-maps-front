import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from './actions/filters';
import { updateResources } from './actions/resources';
import { updateBookings } from './actions/bookings';
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

    store.dispatch(updateBookings([
        { 
            "booked_by": "zxie3", 
            "booking_date": "08/12/2017",
            "start_time": "23:30",
            "site": "Baillieu",
            "booked_for": "zxie3", 
            "booking_type": "User",
            "booking_id": "3962363", 
            "end_time": "23:59", 
            "booking_method": "Advance", 
            "duration": "00:29:00", 
            "resource": "Baillieu-G-01", 
            "location": "G North: 3-hr PC" 
        },
        { 
            "site": "ERC",
            "resource": "ERC-3-01", 
            "booking_id": "1", 
        },
        { 
            "site": "Giblin Eunson",
            "resource": "GE-1-03", 
            "booking_id": "2", 
        }
    ]));
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
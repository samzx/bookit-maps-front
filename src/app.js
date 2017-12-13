import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from './actions/filters';
import { updateResources } from './actions/resources';
import { updateBookings } from './actions/bookings';
import { logUserIn } from './actions/user';
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

let jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// Repeat call every minute - Called by map
    fetchResources(store);
    setInterval(() => fetchResources(store), 60000);

// Fetch bookings when user logs in.
    export const fetchBookingsToStore = () => fetchBookings(store);
    setInterval(() => fetchBookingsToStore() , 60000);

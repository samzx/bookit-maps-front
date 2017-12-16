import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from './actions/filters';

import fetchResources from './fetch/resources';
import fetchBookings from './fetch/bookings';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// Default values
store.dispatch(setLibraryFilter("Baillieu"));
store.dispatch(setFloorFilter("Ground"));
store.dispatch(setTextFilter(""));

let jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// Refresh resources per minute
    fetchResources(store);
    setInterval(() => fetchResources(store), 60000);

// Fetch bookings when user logs in. Refresh per minute.
    export const fetchBookingsToStore = () => fetchBookings(store);
    setInterval(() => {
        if(store.getState().user.username){
            fetchBookingsToStore()
        }
    } , 60000);

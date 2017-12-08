// CURRENTLY NOT WORKING: Testing to retrieve bookings for user

import { updateBookings } from '../actions/bookings';

const fetchBookings = (store) => {
    const base64 = require('base-64');
    
    const username = "zxie3";
    const password = ""
    const url = "https://sit-maps-api-dev.cy.id.au/bookings/?format=json";
    
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    
    fetch(url, {
        method: "GET",
        headers,
    })
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        // UNCOMMENT BELOW ONCE FETCH SUCCEEDS
        // store.dispatch(updateBookings(data));
    })
    .catch((e) => {
        console.warn(`Fetch request failed. Could not retreive USER BOOKINGS from ${url}`);
    });
}

export default fetchBookings;
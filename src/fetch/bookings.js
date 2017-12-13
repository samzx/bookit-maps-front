import { updateBookings } from '../actions/bookings';

const fetchBookings = (store) => {
    
    const state = store.getState();

    if(!state.user.username){
        console.warn("User not logged in.");
        return;
    }

    const url = "https://sit-maps-api-dev.cy.id.au/bookings/?format=json";
    
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + state.user.baseAuth);

    fetch(url, {
        method: "GET",
        headers,
    })
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        store.dispatch(updateBookings(data));
    })
    .catch((e) => {
        console.warn(`Fetch request failed. Could not retreive USER BOOKINGS from ${url}`);
    });
}

export default fetchBookings;
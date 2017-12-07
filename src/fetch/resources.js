import { updateResources } from '../actions/resources';

const fetchResources = (store) => {
    const url = "https://sit-maps-api-dev.cy.id.au/resources/?format=json";
    
    fetch(url, {
        method: "GET",
    })
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        store.dispatch(updateResources(data));
    })
    .catch((e) => {
        console.log(`Fetch request failed. Attempted to retrieve data from ${url} but did not.`);
    });
}

export default fetchResources;
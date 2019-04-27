import { updateResources } from '../actions/resources';
import { resources } from "../../demo-resources"

const fetchResources = (store) => {
    if (window.location.href.match(/.*\/demo$/)) {
      store.dispatch(updateResources(resources))
      return;
    }
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
        console.warn(`Fetch request failed. Attempted to retrieve data from ${url} but did not.`);
    });
}

export default fetchResources;
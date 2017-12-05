import React from 'react';
import Marker from './Marker';
import locations from '../locations/locations';

// CURRENTLY NOT WORKING: Testing to retrieve bookings for user
const getBookings = () => {
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
    })
    .catch((e) => {
        console.log("Fetch request failed.");
    });
}
// Uncomment to attempt to fetch user data
// getBookings();

class MapOverlay extends React.Component{
    state = {
        myLocations: []
    }

    componentDidMount(){
        // TODO: Fetch should send data to redux store. Only then should we query the data. (De-coupling data)

        const url = "https://sit-maps-api-dev.cy.id.au/resources/?format=json";

        fetch(url, {
            method: "GET",
        })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            this.setState(() => {
                
                // Fetch all data from specific library
                const results = data.filter((item) => {
                    return item.name == "Baillieu";
                })[0].locations;

                // Combine into one object
                let objects = [];
                for (let i = 0; i< results.length; i++){
                    objects = objects.concat(results[i].resources);
                }

                // Render specified locations
                return {myLocations: objects};
            });
        })
        .catch((e) => {
            console.log("Fetch request failed.");
        });  
    }

    getMarker = (location) => {
        try {
            return (
                <Marker 
                    key={location.name}
                    x={locations[location.id]["x"]}
                    y={locations[location.id]["y"]}
                    size={4}
                    color={this.pickColor(location.state)}
                />
            );
        } catch (e) {
            return undefined;
        }
    }

    pickColor = (status) => {
        switch (status){
            case "AVAILABLE":
                return "green";
            case "IN_USE":
                return "red";
            case "YOUR_BOOKING":
                return "yellow"
            default:
                return "grey";
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.myLocations.map((location) => this.getMarker(location))
                }
            </div>
        );
    }
}

export default MapOverlay;
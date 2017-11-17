import React from 'react';
import Marker from '../components/Marker';
import site from '../images/1.svg';
/**
 * How to use:
 *  - in app.js
 *      -   import LocationFinder from './tools/location-finder';
        -   ReactDOM.render(<LocationFinder />, document.getElementById("app"));
    - Change site to image you wish to map
    - yarn run dev-server
    - Click screen to output coordinates in console
 */
export default class LocationFinder extends React.Component {

    handleLocation = (e) => {
        e.persist();
        console.log(`{x: ${e.pageX}, y: ${e.pageY}}`);
    }

    render(){
        return (
            <div
                onClick={(e) => this.handleLocation(e)}
            >
                <img 
                    src={site}
                    className="library-map-img"
                />
            </div>
        );
    }
}

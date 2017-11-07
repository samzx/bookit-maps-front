import React from 'react';
import Marker from '../components/Marker';
import site from '../images/1.svg';

const computers = {
    Z: {x: 272, y: 385},
    X: {x: 994, y: 296},
    W: {x: 994, y: 333},
    Y: {x: 290, y: 454},
    B: {x: 585, y: 234},
    A: {x: 607, y: 234},
    C: {x: 585, y: 247},
    D: {x: 607, y: 247},
    F: {x: 585, y: 260},
    E: {x: 607, y: 260},
    G: {x: 585, y: 273},
    H: {x: 607, y: 273},
    J: {x: 585, y: 286},
    I: {x: 607, y: 286},
}

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
                {
                    Object.keys(computers).map((key, index) => <Marker key={"computer-" + index} x={computers[key]["x"]} y={computers[key]["y"]} />)
                }
            </div>
        );
    }
}

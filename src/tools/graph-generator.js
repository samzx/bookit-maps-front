import React from 'react';
import ReactDOM from 'react-dom';
import Marker from '../components/Marker';

import 'normalize.css/normalize.css';
import '../styles/styles.scss';

// CHANGE SITE HERE:
import site from '../images/1.svg';

/**
 * Used to generate a sparse graph similar to a grid. 
 * Where areas covered are walkable locations, connected to adjacent points.
 */

class GraphGenerator extends React.Component{
    render(){
        return (
            <div>
                <img 
                    src={site}
                    className="library-map-img"
                />
            </div>
        );
    }
}

ReactDOM.render(<GraphGenerator />, document.getElementById("app"));
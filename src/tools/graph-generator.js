import React from 'react';
import ReactDOM from 'react-dom';
import Marker from '../components/Marker';

import 'normalize.css/normalize.css';
import '../styles/styles.scss';

// CHANGE SITE HERE:
import site from '../images/1.svg';
import test from '../images/favicon.png';

/**
 * Used to generate a sparse graph similar to a grid. 
 * Where areas covered are walkable locations, connected to adjacent points.
 */

 /**
  * NOTE: At the moment experimenting with canvas implementation. 
  * Feel free to remove this and write a proper graph-generating tool and
  * throw this into the playground folder.
  */

class GraphGenerator extends React.Component{

    componentDidMount(){
        window.onload = () => {

            const context = this.canvas.getContext('2d');

            const dpiScale = 2;
            const zoom = 1;
            const width = 1286;
            const height = 909;    

            // DPI scaling
            this.canvas.width = width * dpiScale * zoom;
            this.canvas.height = height * dpiScale * zoom;
            this.canvas.style.width = `${width * zoom}px`;
            this.canvas.style.height = `${height * zoom}px`;
            context.scale(dpiScale * zoom, dpiScale * zoom);

            // Draw Image
            let img = new Image();
            img.src = site;
            context.drawImage(img, 0, 0,);
        }
    }

    render(){
        return (
            <div>
                <canvas 
                    height={909} 
                    width={1286}
                    ref={(c) => this.canvas = c}
                />
                {
                    <img 
                        src={site}
                        className="library-map-img"
                    />
                }
            </div>
        );
    }
}

ReactDOM.render(<GraphGenerator />, document.getElementById("app"));
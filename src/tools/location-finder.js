import React from 'react';
import ReactDOM from 'react-dom';
import Marker from '../components/Marker';
import site from '../images/1.svg';

import 'normalize.css/normalize.css';
import '../styles/styles.scss';

/**
 * How to use:
 *  - in app.js
 *      -   import LocationFinder from './tools/location-finder';
        -   ReactDOM.render(<LocationFinder />, document.getElementById("app"));
    - Change site to image you wish to map
    - yarn run dev-server
    - Click screen to mark a points
    - Press Z to undo marking a point
    - Press Enter to output marks that can be imported to locations
    - Copy the output in the console, and manually add id locations in locations folder 
 */
class LocationFinder extends React.Component {

    state = {
        positions: []
    }

    componentDidMount(){
        document.addEventListener('keypress', (e) => {
            // console.log(e.keyCode);
            if(e.keyCode == 13){
                this.printPositions();
                this.setState(() => {
                    return { positions: []} 
                });
            }
            if (e.keyCode == 122){
                this.setState(()=>{
                    return this.state.positions.pop();
                });
            }
        });
    }

    printPositions = () => {
        let string = "";
        for(let i=0; i< this.state.positions.length; i++){
            string += `{x: ${this.state.positions[i].x}, y: ${this.state.positions[i].y}},\n`;
        }
        console.log(string);
    }

    handleLocation = (e) => {
        e.persist();
        this.setState((prevState)=>{
            // const combined = prevState.positions + `{x: ${e.pageX}, y: ${e.pageY}}\n`;
            // return {positions: combined};
            return {
                positions: [
                    ...prevState.positions,
                    {
                        x: e.pageX,
                        y: e.pageY
                    }
                ]
            }
            
        });

    }

    render(){
        return (
            <div
                onClick={(e) => this.handleLocation(e)}
            >
                {
                    this.state.positions.map((pos, index)=> 
                        <Marker
                            key={"itemnum" + index}
                            x={pos.x}
                            y={pos.y}
                            size={4}
                            color={"red"}
                        />
                    )
                }
                <img 
                    src={site}
                    className="library-map-img"
                />
            </div>
        );
    }
}

ReactDOM.render(<LocationFinder />, document.getElementById("app"));
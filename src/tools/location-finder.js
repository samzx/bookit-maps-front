import React from 'react';
import ReactDOM from 'react-dom';
import { BasicMarker } from '../components/Marker';

import 'normalize.css/normalize.css';
import '../styles/styles.scss';

// CHANGE SITE HERE:
import site from '../images/1.svg';

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
                        <BasicMarker
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

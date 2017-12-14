import React from 'react';
import Marker from './Marker';
import locations from '../locations/locations';
import { connect } from 'react-redux';
import selectResources from '../selectors/resources';

class MapOverlay extends React.Component{

    state = {
        displaySingle: false
    }

    createMarker = ({name, id, state}) => {
        try {
            return (
                <Marker 
                    key={name}
                    x={locations[id]["x"]}
                    y={locations[id]["y"]}
                    size={4}
                    color={this.pickColor(state)}

                    id={id}
                    name={name}
                    state={state}

                    shine={this.state.displaySingle}
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
                return "orange";
            case "YOUR_BOOKING":
                return "yellow"
            default:
                return "red";
        }
    }

    checkIsDisplayingSingle = () => {
        if(this.props.resources.length == 1 && this.state.displaySingle == false){
            this.setState(() => ({displaySingle: true}));
        } else if (this.props.resources.length != 1 && this.state.displaySingle == true){
            this.setState(() => ({displaySingle: false}));
        }
    }

    componentDidMount(){
        this.checkIsDisplayingSingle();
    }

    componentDidUpdate(){
        this.checkIsDisplayingSingle();
    }

    render(){
        return(
            <div>
                {
                    // Check if filters down to 1 resource, if so, add some blinking to marker
                    this.props.resources.map((resource) => this.createMarker(resource))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resources: selectResources(state.resources, state.filters)
    };
};

export default connect(mapStateToProps)(MapOverlay);
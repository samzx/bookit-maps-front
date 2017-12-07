import React from 'react';
import Marker from './Marker';
import locations from '../locations/locations';
import { connect } from 'react-redux';
import selectResources from '../selectors/resources';

class MapOverlay extends React.Component{

    createMarker = ({name, id, state}) => {
        try {
            return (
                <Marker 
                    key={name}
                    x={locations[id]["x"]}
                    y={locations[id]["y"]}
                    size={4}
                    color={this.pickColor(state)}
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
                return "orange";
        }
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
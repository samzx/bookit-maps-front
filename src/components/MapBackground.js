import React from 'react'
import { connect } from "react-redux";
import floors from '../locations/floors';

import baillieuG from '../images/1.svg';
const maps = baillieuG;

class MapBackground extends React.Component{

    state = {
        display: this.getDisplay()
    }

    getDisplay(){
        // Should listen to change in filters
        return floors[this.props.filters.library].filter((item) => {
            return item.name == this.props.filters.floor;
        })[0].map;
    }

    render(){
        return (
            <div>
                <img 
                    src={this.state.display}
                    draggable="false"
                    className="library-map-img"
                    onLoad={this.props.onImgLoad}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(MapBackground);

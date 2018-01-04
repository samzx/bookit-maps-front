import React from 'react'
import { connect } from 'react-redux';
import selectMap from '../selectors/map';

const MapBackground = (props) => (
    <div>
        <img 
            src={props.map}
            draggable="false"
            className="library-map-img"
            onLoad={props.onImgLoad}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        map: selectMap(state.filters)
    }
}

export default connect(mapStateToProps)(MapBackground);

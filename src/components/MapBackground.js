import React from 'react'
import baillieu from '../images/1.svg';

const MapBackground = (props) => (
    <div>
        <img 
            src={baillieu}
            draggable="false"
            className="library-map-img"
            onLoad={props.onImgLoad}
        />
    </div>
);

export default MapBackground;
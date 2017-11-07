import React from 'react';

// TODO: Pass down as props from father
const size = 5;

const Marker = (props) => (
    <svg className="marker-svg" height={size} width={size} style={{left: props.x, top: props.y}}>
        <circle cx={size/2} cy={size/2} r={size/2} fill="#8357c5" />
    </svg>
);

export default Marker;
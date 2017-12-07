import React from 'react';

const Marker = (props) => (
    <div>
        <svg className="marker-svg" height={props.size} width={props.size} style={{left: props.x, top: props.y}}>
            <circle cx={props.size/2} cy={props.size/2} r={props.size/2} fill={props.color} />
        </svg>
    </div>
);

export default Marker;

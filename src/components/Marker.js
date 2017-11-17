import React from 'react';

const Marker = (props) => (
    <div>
        <svg className="marker-svg" height={props.size} width={props.size} style={{left: props.x, top: props.y}}>
            <circle cx={props.size/2} cy={props.size/2} r={props.size/2} fill={props.color} />
        </svg>
    </div>
);

export default Marker;

// export default class Marker extends React.Component{
//     render(){
//         return(
//             <div>
//                 <svg className="marker-svg" height={size} width={size} style={{left: this.props.x, top: this.props.y}}>
//                     <circle cx={size/2} cy={size/2} r={size/2} fill={this.props.color} />
//                 </svg>
//             </div>
//         );
//     }
// }

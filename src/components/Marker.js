import React from 'react';
import selectResources from '../selectors/resources';

class Marker extends React.Component {

    state = {
        hovering: false
    }

    startInteraction = () => {
        // console.log(this.props.name, this.props.state, this.props.id);
        this.setState(() => ({
            hovering: true
        }))
    }
    endInteraction = () => {
        this.setState(() => ({
            hovering: false
        }))
    }
    render(){
        return (
            <div 
                onMouseEnter={this.startInteraction}
                onTouchStart={this.startInteraction}
                onMouseLeave={this.endInteraction}
                onTouchEnd={this.endInteraction}
            >
                {
                    this.state.hovering && <p style={
                        {
                            position: "absolute", 
                            left: this.props.x, 
                            top: this.props.y - 37.5, 
                            fontSize: "1.5rem",zIndex: 5, 
                            color: "white", 
                            backgroundColor: this.props.color
                        }
                    }> {this.props.name}</p>
                }
                {
                    // BLINK - UNDERNEATH
                    this.props.shine && 
                    <svg className="marker-svg" height={this.props.size*3} width={this.props.size*3} style={{left: this.props.x, top: this.props.y}}>
                        <circle className="pulse-circle-1" cx={this.props.size*1.5} cy={this.props.size*1.5} r={this.props.size/2} stroke={this.props.color} fill={"transparent"}/>
                        <circle className="pulse-circle-2" cx={this.props.size*1.5} cy={this.props.size*1.5} r={this.props.size/2} stroke={this.props.color} fill={"transparent"} />
                    </svg>
                }
                <svg className="marker-svg" height={this.props.size} width={this.props.size} style={{left: this.props.x, top: this.props.y}}>
                    <circle cx={this.props.size/2} cy={this.props.size/2} r={this.props.size/2} fill={this.props.color} />
                </svg>
            </div>
        );
    }
}

export default Marker;

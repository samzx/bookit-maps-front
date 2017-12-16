import React from 'react';
import selectResources from '../selectors/resources';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

class Marker extends React.Component {

    state = {
        hovering: false
    }

    startHover = () => {
        // console.log(this.props.name, this.props.state, this.props.id);
        this.setState(() => ({
            hovering: true
        }))
    }

    endHover = () => {
        this.setState(() => ({
            hovering: false
        }))
    }

    handleOnClick = () => {
        if(this.props.filters.text == this.props.name){
            this.props.dispatch(setTextFilter());
        } else {
            this.props.dispatch(setTextFilter(this.props.name));
        }
    }

    render(){
        return (
            <div>
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
                <div
                    onMouseEnter={this.startHover}
                    onMouseLeave={this.endHover}
                    onClick={this.handleOnClick}
                    onTouchStart={this.startHover}
                    onTouchEnd={this.endHover}
                >
                    <svg className="marker-svg" height={this.props.size} width={this.props.size} style={{left: this.props.x, top: this.props.y}}>
                        <circle cx={this.props.size/2} cy={this.props.size/2} r={this.props.size/2} fill={this.props.color} />
                    </svg>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Marker);

const BasicMarker = (props) => (
    <svg className="marker-svg" height={props.size} width={props.size} style={{left: props.x, top: props.y}}>
        <circle cx={props.size/2} cy={props.size/2} r={props.size/2} fill={props.color} />
    </svg>
);

export { BasicMarker };

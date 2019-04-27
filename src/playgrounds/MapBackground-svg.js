import React from 'react'
import { connect } from 'react-redux';
import selectMap from '../selectors/map';



// TODO: CONVERT TO CANVAS
class MapBackground extends React.Component {
    state = {
        ctx: undefined,
        Image: undefined
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    
    componentDidMount() {
        this.props.onRef(this)

        
        // Draw Image
        let img = new Image();
        img.src = this.props.map;
        
        this.setState({
            ctx: this.canvas.getContext('2d'),
            img
        });

        img.onload = () => {
            this.state.ctx.drawImage(img, this.props.x, this.props.y);
        }
    }

    updateMap = () => {
        this.state.img.src = this.props.map;
    }

    renderMap = () => {
        const {x, y, zoom} = this.props;
        const {ctx, img} = this.state;

        // // DPI scaling
        // const dpiScale = 1.5 / (zoom - 0.25);
        // const width = 1286;
        // const height = 909;
        // this.canvas.width = width * dpiScale;
        // this.canvas.height = height * dpiScale;
        // this.canvas.style.width = `${width}px`;
        // this.canvas.style.height = `${height}px`;
        // this.state.ctx.scale(dpiScale, dpiScale);
        // img.src = this.props.map;
        // Draw Image
        
        ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, x, y, img.width * zoom, img.height * zoom);
    }

    render() {
        return (
            <div>
                <canvas 
                    height={909} 
                    width={1286}
                    className="library-map-img"
                    ref={(c) => this.canvas = c}
                />
                {
                    /*
                    <img 
                        src={props.map}
                        draggable="false"
                        className="library-map-img"
                        onLoad={props.onImgLoad}
                    />
                    */
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        map: selectMap(state.filters)
    }
}

export default connect(mapStateToProps)(MapBackground);

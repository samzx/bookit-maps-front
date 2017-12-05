import React from 'react';
import MapOverlay from '../components/MapOverlay';
import MapBackground from '../components/MapBackground';

// Put into state?
const sidebarWidth = 178;
const headerHeight = 59;

class LibraryMap extends React.Component{
    state = {
        map:{
            x:0,
            y:0
        },
        mouse: {
            x:0,
            y:0
        },
        clicked: false,
        zoom: 1,
        imageDimensions: {}
    };

    componentDidMount(){
        // Loaded from cache, centers map
        this.setState(()=> ({
            map : {
                x:window.innerWidth/2 - document.getElementsByClassName("library-map-img")[0].clientWidth*this.state.zoom/2 -sidebarWidth/2,
                y:window.innerHeight/2 - document.getElementsByClassName("library-map-img")[0].clientHeight*this.state.zoom/2
            }
        }));
    }

    onImgLoad = ({target:img}) => {
        this.setState(() => ({
                map:{
                    x: window.innerWidth/2 - img.clientWidth*this.state.zoom/2 -sidebarWidth/2,
                    y: window.innerHeight/2 - img.clientHeight*this.state.zoom/2
                }
            }));
    }

    handleClick = (e) => {
        e.persist();
        this.setState(() => ({
                clicked: true,
                mouse:{
                    x: e.clientX,
                    y: e.clientY
                } 
            }));
    }
    
    handleUnclick = () => {
        this.setState(() => ({clicked: false}));
    }
    
    handleMove = (e) => {
        e.persist();
        // TODO: add inertia
        // TODO: add lock (so image can't be dragged completely out)
        // FEATURE: rotate depending on entrance (pick entrance, and will rotate map bottom as enrance) and show location

        if(this.state.clicked){
            this.setState((prevState)=> ({
                // Move map according to delta in mouse position
                map: {
                    x: prevState.map.x + (e.clientX - prevState.mouse.x),
                    y: prevState.map.y + (e.clientY - prevState.mouse.y)
                },
                // Record new mouse position
                mouse: {
                    x: e.clientX,
                    y: e.clientY
                }
            }));
        }
    }
    
    handleZoom = (e) => {
        e.persist();
        e.preventDefault();
        if(true){
            this.setState((prevState)=> { 
                let scalechange =  -e.deltaY/1000;
                
                if(prevState.zoom + scalechange > 1.8 && scalechange > 0){
                    return;
                }

                if(prevState.zoom + scalechange < 1 && scalechange < 0){
                    return;
                }

                const factor = (prevState.zoom + scalechange) / prevState.zoom;
                const deltaX = (e.clientX - prevState.map.x - sidebarWidth) * (factor -1);
                const deltaY = (e.clientY - prevState.map.y - headerHeight)* (factor -1);
                return ({
                        map: {
                            x: prevState.map.x - deltaX,
                            y: prevState.map.y - deltaY,
                        },
                        zoom: prevState.zoom + scalechange
                    });
            });
        }
    }

    render(){
        return (
            <div 
                className="library-map-container"
                onMouseDown={(e) => this.handleClick(e)} 
                onMouseMove={(e) => this.handleMove(e)}
                onMouseUp = {this.handleUnclick}
                onMouseLeave = {this.handleUnclick}
                onWheel={(e) => this.handleZoom(e)}
            >
                <div 
                    className="library-map"
                    draggable="false"
                    style={{
                        left: this.state.map.x,
                        top: this.state.map.y,
                        transform: `scale(${this.state.zoom}, ${this.state.zoom})`
                    }}
                >
                    <MapOverlay />
                    <MapBackground onImgLoad={this.onImgLoad} />
                </div>
            </div>
        );

    }
}

export default LibraryMap;
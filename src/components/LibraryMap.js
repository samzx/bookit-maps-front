import React from 'react';
import MapOverlay from '../components/MapOverlay';
import MapBackground from '../components/MapBackground';

// HACK: Hardcoded...
const sidebarWidth = 210;
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
        grabStyle: "library-map-container",
        zoom: 1,
        imageDimensions: {}
    };

    componentDidMount(){
        // If loaded from cache, re-centers map
        this.setState(()=> ({
            map : {
                x:window.innerWidth/2 - document.getElementsByClassName("library-map-img")[0].clientWidth*this.state.zoom/2 -sidebarWidth/2,
                y:window.innerHeight/2 - document.getElementsByClassName("library-map-img")[0].clientHeight*this.state.zoom/2
            }
        }));
    }

    onImgLoad = ({target:img}) => {
        // Centers map
        this.setState(() => ({
                map:{
                    x: window.innerWidth/2 - img.clientWidth*this.state.zoom/2 -sidebarWidth/2,
                    y: window.innerHeight/2 - img.clientHeight*this.state.zoom/2
                }
            }));
    }

    handleClick = (e, mode) => {
        e.persist();
        let interactX, interactY;
        switch(mode){
            case "desktop":
                interactX = e.clientX;
                interactY = e.clientY;
                break;
            case "mobile":
                interactX = e.changedTouches[0].clientX
                interactY = e.changedTouches[0].clientY
                break;
        }
        this.setState(() => ({
                clicked: true,
                grabStyle: "library-map-container library-map-container--grabbing",
                mouse:{
                    x: interactX,
                    y: interactY
                } 
            }));
    }
    
    handleUnclick = () => {
        this.setState(() => ({
            clicked: false,
            grabStyle: "library-map-container",
        }));
    }
    
    handleMove = (e, mode) => {
        e.persist();
        // TODO: add inertia
        // TODO: add lock (so image can't be dragged completely out of screen)
        // FEATURE: rotate depending on entrance (pick entrance, and will rotate map bottom as enrance) and show location
        if(this.state.clicked){

            let interactX, interactY;
            switch(mode){
                case "desktop":
                    interactX = e.clientX;
                    interactY = e.clientY;
                    break;
                case "mobile":
                    interactX = e.changedTouches[0].clientX;
                    interactY = e.changedTouches[0].clientY;
                    break;
            }
            this.setState((prevState)=> ({
                // Move map according to delta in mouse position
                map: {
                    x: prevState.map.x + (interactX - prevState.mouse.x),
                    y: prevState.map.y + (interactY - prevState.mouse.y)
                },
                // Record new mouse position
                mouse: {
                    x: interactX,
                    y: interactY
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
                // HACK: Hard coded to 1.8 to prevent lagging (if value is > 1.8)
                if(prevState.zoom + scalechange > 1.8 && scalechange > 0){
                    return;
                }
                // HACK: Hardcoded to set max zoom out to 1. Should experiment with different values
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
                className={this.state.grabStyle}

                onClick={(e) => e.preventDefault()}

                onMouseDown={(e) => this.handleClick(e, "desktop")}
                onTouchStart={(e) => this.handleClick(e, "mobile")}

                onMouseMove={(e) => this.handleMove(e, "desktop")}
                onTouchMove={(e) => this.handleMove(e, "mobile")}

                onMouseUp = {this.handleUnclick}
                onMouseLeave = {this.handleUnclick}
                onTouchCancel = {this.handleUnclick}
                onTouchEnd = {this.handleUnclick}

                
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
import React from 'react';
import { connect } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from '../actions/filters'
import FA from 'react-fontawesome';

const Filters = (props) => (
    <div className="browse-filters">
        <p className="sidebar-title">Options</p>
        <select className="browse-filters__select"
            value={props.filters.library}
            onChange={(e) => {
                switch(e.target.value){
                    case "baillieu":
                        props.dispatch(setLibraryFilter("Baillieu"));
                        break;
                }
            }}
        >
            <option value="baillieu" >Baillieu</option>
        </select>
        <select className="browse-filters__select"
            value={props.filters.floor}
            onChange={(e) => {
                switch(e.target.value){
                    case "G":
                        props.dispatch(setFloorFilter("G"));
                        break;
                    case "LG":
                        props.dispatch(setFloorFilter("LG"));
                        break;
                    case "L1":
                        props.dispatch(setFloorFilter("L1"));
                        break;
                }
            }}
        >
            <option value="G" >Ground</option>
            <option value="LG" >Lower Ground</option>
            <option value="L1" >Level 1</option>
        </select>
        <input 
            type="text" 
            placeholder={"Search"} 
            className="browse-filters__field" 
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(Filters);

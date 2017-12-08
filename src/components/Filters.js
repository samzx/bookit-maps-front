import React from 'react';
import { connect } from 'react-redux';
import { setLibraryFilter, setFloorFilter, setTextFilter } from '../actions/filters'
import floors from '../locations/floors';
import FA from 'react-fontawesome';

const Filters = (props) => (
    <div className="browse-filters">
        <p className="sidebar-title">Filters</p>
        {/* Search should have autocomplete */}
        <input 
            type="text" 
            placeholder={"Search"} 
            className="browse-filters__item browse-filters__item--field" 
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        
        <select className="browse-filters__item browse-filters__item--select"
            value={props.filters.library}
            onChange={(e) => {
                props.dispatch(setLibraryFilter(e.target.value));
            }}
        >
            {
                props.resources.map(({name, id}) => {
                    return (
                        <option value={name} key={'res' + id} > {name} </option>
                    );
                })
            }
        </select>

        <select className="browse-filters__item browse-filters__item--select"
            value={props.filters.floor}
            onChange={(e) => {
                props.dispatch(setFloorFilter(e.target.value));
            }}
        >
            {
                floors[props.filters.library].map((floor) => {
                    return (
                        <option value={floor.filter} key={'floor::id::' + floor.filter}> {floor.name} </option>
                    );
                })
            }
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        resources: state.resources
    };
}

export default connect(mapStateToProps)(Filters);

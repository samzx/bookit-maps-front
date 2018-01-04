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
        {
            // Clear text icon in Search bar (X)
            props.filters.text && 
            <a
                className="browse-filters-clear-text"
                onClick={
                    () => {
                        props.dispatch(setTextFilter());
                    }
                }
            > <FA name="times-circle" /> </a>
        }
        {/* Select Library */}
        <select className="browse-filters__item browse-filters__item--select"
            value={props.filters.library}
            onChange={(e) => {
                const lib = e.target.value;
                props.dispatch(setLibraryFilter(lib));
                props.dispatch(setFloorFilter(floors[lib][0].name));
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

        {/* Select Floor */}
        <select className="browse-filters__item browse-filters__item--select"
            value={props.filters.floor}
            onChange={(e) => {
                props.dispatch(setFloorFilter(e.target.value));
            }}
        >
            {
                floors[props.filters.library].map((floor) => {
                    return (
                        <option value={floor.name} key={'floor::id::' + floor.filter}> {floor.name} </option>
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

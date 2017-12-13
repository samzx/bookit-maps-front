import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setLibraryFilter, setFloorFilter } from '../actions/filters';

const Bookings = (props) => (
    <div className="bookings">
        <p className="sidebar-title">Your Bookings</p>
        {
            props.bookings.length == 0 ?
            undefined // <p> No bookings </p>
            :
            props.bookings.map((booking, index) => {
               return (
                   <div key={'bid::' + booking.booking_id} onClick={() => {
                       props.dispatch(setTextFilter(booking.resource));
                       props.dispatch(setLibraryFilter(booking.site));
                       props.dispatch(setFloorFilter(booking.resource.split('-')[1]));
                    }}>
                        <a><p className="bookings-listing"> {booking.resource} </p></a>
                    </div>
               );
           })
        }
    </div>
);

const mapStateToProps = (state) => {
    return { bookings: state.bookings };
}

export default connect(mapStateToProps)(Bookings);
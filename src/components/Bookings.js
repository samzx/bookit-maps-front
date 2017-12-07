import React from 'react';
import { connect } from 'react-redux';

const Bookings = (props) => (
    <div className="bookings">
        <p className="sidebar-title">Your Bookings</p>
        {
           props.bookings.map((booking, index) => {
               return (
                   <div key={booking + ':booking:#' + index}>
                        <a><p className="bookings-listing"> {booking} </p></a>
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
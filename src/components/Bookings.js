import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, setLibraryFilter, setFloorFilter } from '../actions/filters';
import { fetchBookingsToStore } from '../app';
import FA from 'react-fontawesome';

class Bookings extends React.Component{

    state = {
        refreshing: ""
    }

    render(){
        return (
            <div className="bookings">
                {
                    <p className="sidebar-title">
                        Your Bookings
                        <a
                            className={"bookings-listing-refresh " + this.state.refreshing }
                            onClick={() => {
                                if(!this.state.refreshing){
                                    this.setState(() => ({ refreshing: "bookings-listing-refresh--active"}));
                                    setTimeout(() => {
                                        this.setState(() => ({ refreshing: ""}));
                                    }, 1000);
                                    fetchBookingsToStore();
                                }
                            }}
                        >
                            <FA name="refresh" />
                        </a>
                    </p>
                }
                {
                    this.props.bookings.length == 0 ?
                    <Link to="/book" >
                        <p className="bookings-listing"> <i> You don't seem to have any bookings. Want to book a resource? </i></p>
                    </Link>
                    :
                    this.props.bookings.map((booking, index) => {
                       return (
                           <div key={'bid::' + booking.booking_id} onClick={() => {
                               this.props.dispatch(setTextFilter(booking.resource));
                               this.props.dispatch(setLibraryFilter(booking.site));
                               this.props.dispatch(setFloorFilter(booking.resource.split('-')[1]));
                            }}>
                                <a><p className="bookings-listing"> {booking.resource} </p></a>
                            </div>
                       );
                   })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { bookings: state.bookings };
}

export default connect(mapStateToProps)(Bookings);
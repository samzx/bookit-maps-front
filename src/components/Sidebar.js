import React from 'react';
import { connect } from 'react-redux';
import Bookings from './Bookings';
import Filters from './Filters';

const Sidebar = (props) => (
    <div className="sidebar">
        <Filters />
        {
            !!props.user.username && <Bookings />
        }
    </div>
);

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Sidebar);
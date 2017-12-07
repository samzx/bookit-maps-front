import React from 'react';
import Bookings from './Bookings';
import Filters from './Filters';

const Sidebar = () => (
    <div className="sidebar">
        <Filters />
        <Bookings />
    </div>
);

export default Sidebar;
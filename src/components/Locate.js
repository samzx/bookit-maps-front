import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <div>
        {/* We can use react-search to autofill/suggestions when user types their computer number */}
        <p>Locate has nothing here at the moment. <Link to="/browse"> Looking to browse? </Link></p>
    </div>
);

export default Dashboard;

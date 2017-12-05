import React from 'react';
import {Link} from 'react-router-dom';
import FA from 'react-fontawesome';

const NotFoundPage = () => (
    <div>
        404 Not Found <Link to="/"> Home</Link>
    </div>
);
export default NotFoundPage;
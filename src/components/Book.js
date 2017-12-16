import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from './NotFoundPage';

const Book = (props) => (
    <div>
        {
            !!props.user.username ?
            <p style={{textAlign:"center"}}>Book has nothing here at the moment. <Link to="/"> Looking to browse? </Link></p>
            :
            <NotFound />
        }
    </div>
);

const mapStateToProps = (state) => {
    return { user: state.user };
}

export default connect(mapStateToProps)(Book);

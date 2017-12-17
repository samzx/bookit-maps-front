import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from './NotFoundPage';

/**
 *  **********************************************
 *      -    THIS IS A FUTURE FEATURE    -
 *      First we need to implement backend 
 *      that retrieves all user bookings.
 *  **********************************************
 * 
 *  UX Flow:
 *      Basic:
 *          -> Choose a Time and date
 *          -> Choose a Library
 *          -> Displays available computers and their available time to book
 *          -? No available computers -> Advanced
 *      Advanced:
 *          -> Look for available timeslots for chosen library
 *          * If not implemented, redirect to bookit.unimelb.edu.au
 *      Finish:
 *          * Redirects to Browse page and shows where the booking is located.
 *          * User will get email through BookIT (automatic - unrelated)
 *  Notes:
 *      * For elegance, can use Time and Date picker from Material UI React Library
 */

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

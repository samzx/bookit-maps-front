import React from 'react';
import Bookings from './Bookings';
import Header from './Header';
import LibraryMap from './LibraryMap';

class BookITMapsApp extends React.Component{
    render(){
        return (            
            <div>
                <Header />
                <Bookings />
                <LibraryMap map={"baillieu"}/>
            </div>
        );
    }
}

export default BookITMapsApp;
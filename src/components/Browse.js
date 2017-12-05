import React from 'react';
import Bookings from './Bookings';
import LibraryMap from './LibraryMap';

class Browse extends React.Component{
    render(){
        return (            
            <div>
                <Bookings />
                {/* TODO: Add more libraries */}
                <LibraryMap map={"baillieu"}/>
            </div>
        );
    }
}

export default Browse;
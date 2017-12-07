import React from 'react';
import Sidebar from './Sidebar';
import LibraryMap from './LibraryMap';

class Browse extends React.Component{
    render(){
        return (            
            <div>
                <Sidebar />
                {/* TODO: Add more libraries */}
                <LibraryMap map={"baillieu"}/>
            </div>
        );
    }
}

export default Browse;
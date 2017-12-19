import React from 'react';
import { connect } from 'react-redux';
import Bookings from './Bookings';
import Filters from './Filters';
import FA from 'react-fontawesome';

class Sidebar extends React.Component{

    state = {
        sideBarClass: "sidebar--close",
    }

    handleOpenSidebar = () => {
        if(this.state.sideBarClass == "sidebar--close"){
            this.setState(() => ({
                sideBarClass: "sidebar--open",
            }))
        } else {
            this.setState(() => ({
                sideBarClass: "sidebar--close",
            }));
        }
    }

    render(){
        return (
            <div>
                <div className={"sidebar-mobile-activate"} onClick={this.handleOpenSidebar}>
                    <FA name="ellipsis-h" />
                </div>
                <div className={"sidebar " + this.state.sideBarClass} >
                    <Filters />
                    {
                        !!this.props.user.username && <Bookings />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Sidebar);
import React from 'react';
import { connect } from 'react-redux';
import { logUserIn } from '../actions/user';
import { Link } from 'react-router-dom';

class SignIn extends React.Component{
    SpoofSignIn = () => {
        this.props.dispatch(logUserIn("Test Dummy"));
        this.props.history.push("/");
    }

    render(){
        return (
            <div>
                <p> Sign in page not implemented. <button onClick={this.SpoofSignIn} >Spoof it</button></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
}

export default connect(mapStateToProps)(SignIn);
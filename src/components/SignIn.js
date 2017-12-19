import React from 'react';
import { connect } from 'react-redux';
import fetchBookings from '../actions/bookings';
import { logUserIn, logginInProgress, logInSuccess, logInFailed } from '../actions/user';
import { Link } from 'react-router-dom';
import { fetchBookingsToStore } from '../app';

class SignIn extends React.Component{
    state = {
        username: "",
        password: "",
        error: ""
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.props.user.hanging) return;

        const url = "https://sit-maps-api-dev.cy.id.au/bookings/?format=json";
        let headers = new Headers();
        const base64 = require('base-64');
        const baseAuth = base64.encode(this.state.username + ":" + this.state.password);
        headers.append('Authorization', 'Basic ' + baseAuth);

        this.props.dispatch(logginInProgress());

        // Attempt Log In
        fetch(url, {
            method: "GET",
            headers,
        })
        .then((resp) => {
            const success = resp.ok;

            if(success){
                this.props.dispatch(logInSuccess());
                this.props.dispatch(logUserIn({username: this.state.username, password: this.state.password}));

                fetchBookingsToStore();

                // Clean up
                this.setState(() => {username: ""});
                this.setState(() => {password: ""});
                this.props.history.push("/");
            } else {
                this.setState(() => {
                    return { error: "Log in failed"};
                })
                this.props.dispatch(logInFailed());
            }
        })
        .catch((e) => {
            console.warn(`Attempt to authenticate failed. Could not retreive Log in to ${url}`);
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} className="sign-in-form" >
                    <input
                        autoFocus 
                        type="text" 
                        placeholder={"Username"}
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                        className="sign-in-input"
                    />
                    <input 
                        type="password" 
                        placeholder={"Password"} 
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        ref="userPassword"
                        className="sign-in-input"
                    />
                    <button
                        className="sign-in-input"
                    > 
                        Sign In 
                    </button>
                </form>
                {
                    this.props.user.hanging ? <p className="sign-in-text" > Attempting Log in... </p> : undefined
                }
                {
                    !!this.state.error && !this.props.user.hanging && <p className="sign-in-text" >{this.state.error}</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(SignIn);
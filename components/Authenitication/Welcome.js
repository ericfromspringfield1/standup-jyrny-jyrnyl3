import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../Capstone.css"


class Welcome extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h1 className ="center">Welcome to your standUp jyrny jyrnyL</h1>
                    <p className ="center">Document The Funny</p>
                </div>
                <div className="welcome--btns">
                    <Link to="/Registration"><button className="register--btn">Register New Account</button></Link>
                    <Link to="/Login"><button className="login--btn">Login</button></Link>
                </div>

                <picture>
                    <img src={require('./charlieChaplin.png')} alt="Hee Hee" />
                </picture>
            </>
        );
    }
}

export default Welcome;

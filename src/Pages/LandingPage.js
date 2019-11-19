//Landing Page Goes Here
import React from 'react';
import {Link} from 'react-router-dom';

export const LandingPage = () => {
    return(
        <>
            <h1> Walters Landing Page </h1>
            <Link to="/">Home</Link> <br></br>
            <Link to="/api/users"> For Employers Button Here </Link> <br></br>
            <Link to="/api/auth/register"> For Career Coaches Button Here </Link> <br></br>
        </>
    )
}
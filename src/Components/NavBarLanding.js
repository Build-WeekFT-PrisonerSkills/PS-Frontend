import React from 'react';
import {Link} from 'react-router-dom';

export const NavBarLanding = () => {
    return(
        <div style={{
            width: '100%', 
            color: 'white',
            backgroundColor: 'darkblue', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between'}}>
            <h4>Second Chance</h4>
            <div style={{display: "flex", justifyContent: 'space-evenly',}}>
            <Link to="/register">
                <p style={{marginRight: '2rem'}}>Register</p>
            </Link>
            <Link to="/login">
                <p style={{marginRight: '2rem'}}>Login</p>
            </Link>             
            </div>
        </div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom'
export const NavBarOther = () => {
    return(
        <div style={{
            width: '100%', 
            color: 'white',
            backgroundColor: 'darkblue', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h4>Second Chance</h4>
            </Link>
            <div style={{display: "flex", justifyContent: 'space-evenly',}}>
    
            </div>
        </div>
    )
}

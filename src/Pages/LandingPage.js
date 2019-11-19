//Landing Page Goes Here
import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";

const Hero = styled.div`
`
const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
`

const LandingButtons = styled.div`
    text-align: center;
`

export const LandingPage = () => {
    return(
        <Hero>
            <img className='landingImg' src='https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Man welding metal'/>
            <Heading>Welcome to <span className='landingSpan'>Second Chance</span></Heading>
            <LandingButtons>
                <Link to="/login">
                    <button className="landingBtn">For Employers</button>
                </Link>
                <Link to="/register">
                    <button className="landingBtn">For Prisons</button>
                </Link>
            </LandingButtons>
        </Hero>
    );
}
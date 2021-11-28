import { Button } from '@material-ui/core'
import React from 'react'
import rainMan from '../assets/images/Rain Man.png'

import { useNavigate } from 'react-router'

const SplashScreen = ()=> {
    const navigate = useNavigate();

    const getStarted = _=> navigate('/home');

    return (
        <div className="container screen-container">
            <b className="title-txt">Daily <br />Weather <br />Forecast</b>
            
            <section className="content-section">
                <img src={rainMan} alt="Splash screen image - man sitting in the rain with an umbrella" />
                <p className="product-phrase">Never get caught unawares in your <span>City!</span></p>
                <p>Keep track of the weather where ever you go</p>
                <button className="btn" onClick={getStarted}>Get Started</button>
            </section>
            
        </div>
    )
}

export default SplashScreen

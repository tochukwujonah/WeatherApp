import React from 'react'
import TabNavigation from '../components/tab-navigation'
import { TABS } from './CONST'
import weatherImg from '../assets/images/png/007-rainy-day.png'

import drop from '../assets/images/png/009-drop.png'
import view from '../assets/images/png/006-view.png'
import cloud from '../assets/images/png/006-cloudy.png'

const HomeScreen = ()=> {
    return (
        <div>
            <section className="container home-container screen-section animate-screen">

                <h1 className = "home-report">Today's Report </h1>
                <div className="content">
                    <img src={weatherImg} alt="Weather image" />
                    <br/>

                    <span className="caption">Its Rainy</span>
                    <span className="material-temp">25<sup>o</sup></span>

                    <div className="floating-content">
                        <div>
                            <img src={cloud} alt="Drop" />
                            <b>8km/hr</b>
                            <span>Wind</span>
                        </div>
                        <div>
                            <img src={drop} alt="Drop" />
                            <b>35%</b>
                            <span>Humidity</span>
                        </div>
                        <div>
                            <img src={view} alt="Drop" />
                            <b>1.4km/hr</b>
                            <span>Visibility</span>
                        </div>
                    </div>
                </div>



            </section>
            

            <TabNavigation active={TABS.home} />
            
        </div>
    )
}

export default HomeScreen

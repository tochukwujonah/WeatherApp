import React, { useState } from 'react'

import TabNavigation from '../components/tab-navigation'
import { TABS } from './CONST'

import drop from '../assets/images/png/009-drop.png'
import view from '../assets/images/png/006-view.png'
import cloud from '../assets/images/png/006-cloudy.png'
import { ChevronLeftSharp, ChevronRight, StarBorder, } from '@material-ui/icons'
import { Link } from '@material-ui/core'

import { useNavigate } from 'react-router'

const LocationScreen = ()=> {

    const [scroll, setScroll] = useState(false);

    const navigate = useNavigate();


    const goBack = _=> navigate('/home');

    //Scroll / Drag Handlers
    const scrollForcast = _=> {
        
    }



    

    return (
        <>

            <div className="location-container animate-screen">
                <section className="top">
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


                <div className="container">
                    <header>
                        <Link onClick={goBack} className="back-link"><ChevronLeftSharp /> Back</Link>
                        <StarBorder />
                    </header>


                    <section className="location-details">
                        
                        <section>
                            <b>Lagos, Nigeria</b>
                            <br />

                            <span>Thurs, November 25. 2021</span>
                            <br />
                        </section>

                        <b className="temp">26 <sup>o <sub>C</sub> </sup> </b>

                        <section>
                            <p className= "location-details-second caption">Partly Cloudy</p>
                            <br />
                            <button className="btn-bordered" onClick={()=> navigate('/location-details')}>
                                See Details
                            </button>
                        </section>
                        

                    </section>

                    <section className="location-details location-details1">
                        
                        
                    

                    </section>





                </div>




                </section>
                <section className="bottom">
                    <div className="container hour-forcast-container">
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                        <div className="hour-forecast">
                            <b>24</b>
                            <img src={cloud} alt="Drop" />
                            <span>Wind</span>
                        </div>
                    </div>


                    {/* Scroll buttons */}
                    <span className="arrow"><ChevronRight scale={5} /></span>

                </section>
                
            </div>

            <TabNavigation active= {TABS.location} />

        </>
    )
}

export default LocationScreen

import React, { useEffect } from 'react'

import { ChevronLeftSharp, ChevronRight, Star, StarBorder, StarOutlined } from '@material-ui/icons'
import { Link } from '@material-ui/core'

import { useNavigate } from 'react-router'

const LocationDetailsScreen = ()=> {

    const navigate = useNavigate();
    const goBack = ()=> navigate('/location')

    return (
        <div className="animate-screen screen-container location-details-container">

            <section className="header">
                <div className="container">
                    <header>
                        <Link onClick={goBack} className="back-link"><ChevronLeftSharp /> Back</Link>
                        <StarBorder />
                    </header>
                </div>
            </section>
            <section className="body"></section>
           
            
        </div>
    )
}

export default LocationDetailsScreen

import React from 'react'

import night from '../assets/images/png/003-night.png'

const Bookmark = ()=> {
    return (
        <div className="bookmark-item">
            <span>Enugu, Nigeria</span>

            <div className="right-content">
                <span>25<sup>o</sup>c</span>
                <img src={night} alt="Night image" className="icon" />
                
            </div>

            
        </div>
    )
}

export default Bookmark

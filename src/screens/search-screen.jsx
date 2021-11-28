import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import searching from '../assets/images/Searching.png'
import TabNavigation from '../components/tab-navigation'
import { TABS } from './CONST'

const SearchScreen = ()=> {

    return (
        <>

            <div className="search-screen animate-screen">
                <div className="container screen-container screen-container-top">

                {/* Search section */}
                <div className="search">
                    <SearchOutlined />
                    <input type="input" placeholder="Search city..." />
                </div>

                {/* <img src={searching} alt="Searching" className="img-lg" /> */}

                </div>

            </div>

            <TabNavigation active= {TABS.search} />
        
        </>
    )
}

export default SearchScreen

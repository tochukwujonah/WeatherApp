import React from 'react'
import Bookmark from '../components/bookmark'

import TabNavigation from '../components/tab-navigation'
import { TABS } from './CONST'

const BookmarkScreen = ()=> {
    return (
        <>


            <div className="container animate-screen">
                <br />
                <h3 align="center">Favourite Locations</h3>
                <br />
                <div className="bookmarks">
                    <Bookmark />
                    <Bookmark />
                    <Bookmark />
                    <Bookmark />
                    <Bookmark />
                </div>
                
            </div>
        

            <TabNavigation active= {TABS.bookmark} />
        
        </>
    )
}

export default BookmarkScreen

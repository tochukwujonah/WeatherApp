import React from 'react'
import { HomeOutlined, HomeRounded , SearchOutlined, LocationOnOutlined, BookmarkOutlined, BookmarkBorder} from '@material-ui/icons';

import { useNavigate } from 'react-router';
import { TABS } from '../screens/CONST'

const TabNavigation = (props)=> {
    const navigate = useNavigate();

    const routes = ['home', 'location', 'search', 'bookmarks'];

    const navigateScreen = (ev) => {
        console.log(ev.target.nodeName)

        if(ev.target.nodeName === 'svg') {
            navigate(`/${routes[ev.target.id]}`);
            return;
        }

        navigate(`/${routes[ev.target.parentElement.id]}`);

    }


    return (
        <div className="tab-navigation">
            <HomeOutlined className={props.active === 0 ? "active" : null} onClick={navigateScreen} id={TABS.home} /> 
            <LocationOnOutlined className={props.active === 1 ? "active" : null} onClick={navigateScreen} id={TABS.location} />
            <SearchOutlined className={props.active === 2 ? "active" : null} onClick={navigateScreen} id={TABS.search} /> 
            <BookmarkBorder className={props.active === 3 ? "active" : null} onClick={navigateScreen} id={TABS.bookmark} />
        </div>
    )
}

export default TabNavigation

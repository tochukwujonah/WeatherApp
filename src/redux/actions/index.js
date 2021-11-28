export const ADD_FAVOURITE = (location) => {
    return {
        type: 'add_fav',
        payload: location
    }
}


export const LOAD_WEATHER_DATA = ()=> {
    return {
        type: 'load_weather_data',
        payload: ''
    }
}

export const SEARCH = (query)=> {
    return {
        type: 'search',
        payload: query
    }
}






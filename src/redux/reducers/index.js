const loadWeatherData = async ()=> {
    const data = await fetch(`https://openweathermap.org/api`);

    const weather_data = await data.json();

    return weather_data;
}


const loadSearchResult = async (str = '')=> {
    const data = JSON.parse(await loadWeatherData());
    return data.location.search(new RegExp(str));

}



export const loadWeatherDataReducer = (state = false, action)=> {
    switch(action.type){
        case 'load_weather_data':
            return loadWeatherData();

        default:
            return state;
    }
}


export const addFavouriteReducer = (state = [], action)=> {
    switch(action.type){
        case 'add_fav':
            state.unshift(action.payload);
            return state;

        default:
            return state;
    }
}


export const searchReducer = (state = [], action)=> {
    switch(action.type){
        case 'search':
            return loadSearchResult(action.payload);

        default:
            return state;

    }
}





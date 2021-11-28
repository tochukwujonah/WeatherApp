import {applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import { addFavouriteReducer, loadWeatherDataReducer, searchReducer } from './reducers';

const initialState = {};
const middleWares = [thunk];

const rootReducer = combineReducers({
    favourites: addFavouriteReducer,
    weatherData: loadWeatherDataReducer,
    search: searchReducer
})

const store = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleWares)
    );
}

export default store;


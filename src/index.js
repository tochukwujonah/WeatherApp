import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SplashScreen, HomeScreen, SearchScreen, LocationScreen, BookmarkScreen, LocationDetailsScreen } from './screens'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/location' element={<LocationScreen />} />
          <Route path="/location-details" element={<LocationDetailsScreen />} />
          <Route path='/search' element={<SearchScreen />} />
          <Route path='/bookmarks' element={<BookmarkScreen />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

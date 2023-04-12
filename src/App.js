import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom'
import SearchResults from './Components/search-results';
function App() {
  return (
        <div>
          <BrowserRouter>
          <Routes>SearchResults
          <Route exact path="/" element = {<SearchResults></SearchResults>}/>
        </Routes>
          </BrowserRouter>

        </div>

    
  );
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SearchResults from './Components/search-results';
import Search from './Components/searchbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search-results" element={<SearchResultsWrapper />} />
      </Routes>
    </Router>
  );
}

function SearchResultsWrapper() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fromDateTime = searchParams.get('from');
  const toDateTime = searchParams.get('to');

  return <SearchResults from={fromDateTime} to={toDateTime} />;
}

export default App;
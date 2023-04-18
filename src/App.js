import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SearchResults from './Components/search-results';
import Search from './Components/searchbar';
import RobotPage from './Components/robotpage';
import RobotBooking from './Components/robotbookingpage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search-results/:fromdate/:todate/:location/:tenure" element={<SearchResultsWrapper />} />
        <Route path="/product-details/:name/:type/:tenure" element={<RobotPage />} />
        <Route path="/product-details/:name/:type/:tenure/booking" element={<RobotBooking />} />
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
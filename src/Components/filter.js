import React, { useState, useEffect } from 'react';
import './filter.css';

function Filter({ robots, onFilterChange }) {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedDisplays, setSelectedDisplays] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    // Filter robots based on selected price, display type, and robot type
    let filteredRobots = robots;

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split(' - ').map(str => parseInt(str.replace('AED ', '').replace(',', '')));
      filteredRobots = filteredRobots.filter(robot => robot.pricePerDay >= minPrice && robot.pricePerDay <= maxPrice);
    }

    if (selectedDisplays) {
      filteredRobots = filteredRobots.filter(robot => robot.features[0].text === selectedDisplays);
    }

    if (selectedType) {
      filteredRobots = filteredRobots.filter(robot => robot.type === selectedType);
    }

    // Call the parent component's onFilterChange function with the filtered robots
    onFilterChange(filteredRobots);
  }, [robots, selectedPrice, selectedDisplays, selectedType, onFilterChange]);

  const handlePriceClick = (price) => {
    setSelectedPrice(price === selectedPrice ? null : price);
  };

  const handleDisplaysClick = (displays) => {
    setSelectedDisplays(displays === selectedDisplays ? null : displays);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <div className="filterBox">
      <div className="filterTitle">Filter by:</div>
      <div className="filterDivider" />
      <div className="filterHeading">Price per day</div>
      <div className="filterSubheading" onClick={() => handlePriceClick('AED 0 - AED 3000')}>
        <div className={`filterIcon ${selectedPrice === 'AED 0 - AED 3000' ? 'filterIconSelected' : ''}`}>
          {selectedPrice === 'AED 0 - AED 3000' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">AED 0 - AED 3000</span>
      </div>
      <div className="filterSubheading" onClick={() => handlePriceClick('AED 3000 - AED 6000')}>
        <div className={`filterIcon ${selectedPrice === 'AED 3000 - AED 6000' ? 'filterIconSelected' : ''}`}>
          {selectedPrice === 'AED 3000 - AED 6000' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">AED 3000 - AED 6000</span>
      </div>
      <div className="filterDivider" />
      <div className="filterHeading">Number of displays</div>
      <div className="filterSubheading" onClick={() => handleDisplaysClick('Single display')}>
        <div className={`filterIcon ${selectedDisplays === 'Single display' ? 'filterIconSelected' : ''}`}>
          {selectedDisplays === 'Single display' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Single display</span>
      </div>
      <div className="filterSubheading" onClick={() => handleDisplaysClick('Dual display')}>
        <div className={`filterIcon ${selectedDisplays === 'Dual display' ? 'filterIconSelected' : ''}`}>
          {selectedDisplays === 'Dual display' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Dual display</span>
      </div>
      {/* new filter */}
      <div className="filterDivider" />
      <div className="filterHeading">Type</div>
      <div className="filterSubheading" onClick={() => handleTypeClick('rent')}>
        <div className={`filterIcon ${selectedType === 'rent' ? 'filterIconSelected' : ''}`}>
          {selectedType === 'rent' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Rent</span>
      </div>
      <div className="filterSubheading" onClick={() => handleTypeClick('advertisement')}>
        <div className={`filterIcon ${selectedType === 'advertisement' ? 'filterIconSelected' : ''}`}>
          {selectedType === 'advertisement' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Advertisement</span>
      </div>
    </div>
  );
}

export default Filter;

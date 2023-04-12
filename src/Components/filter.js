import React, { useState } from 'react';
import './filter.css';

function Filter(props) {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedScreens, setSelectedScreens] = useState(null);

  const handlePriceClick = (price) => {
    setSelectedPrice(price === selectedPrice ? null : price);
    if (typeof props.onPriceChange === "function") {
      props.onPriceChange(price);
    }
  };

  const handleScreensClick = (screens) => {
    setSelectedScreens(screens === selectedScreens ? null : screens);
    props.onScreensChange(screens);
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
      <div className="filterHeading">Number of screens</div>
      <div className="filterSubheading" onClick={() => handleScreensClick('Single screen')}>
        <div className={`filterIcon ${selectedScreens === 'Single screen' ? 'filterIconSelected' : ''}`}>
          {selectedScreens === 'Single screen' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Single screen</span>
      </div>
      <div className="filterSubheading" onClick={() => handleScreensClick('Triple screen')}>
        <div className={`filterIcon ${selectedScreens === 'Triple screen' ? 'filterIconSelected' : ''}`}>
          {selectedScreens === 'Triple screen' && <span className="tick">✓</span>}
        </div>
        <span className="filterText">Triple screen</span>
      </div>
    </div>
  );
}

export default Filter;

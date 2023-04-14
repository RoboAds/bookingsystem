import React, { useState } from 'react';
import './sortby.css';

function SortBy({ onSort }) {
  const [activeOption, setActiveOption] = useState('recommended');

  const handleOptionClick = (option) => {
    setActiveOption(option);
    onSort(option);
  };

  return (
    <div className="sort-by_container">
      <div
        className={`sort-by-option ${activeOption === 'recommended' ? 'active' : ''}`}
        onClick={() => handleOptionClick('recommended')}
      >
        Recommended
      </div>
      <div
        className={`sort-by-option ${activeOption === 'low-to-high' ? 'active' : ''}`}
        onClick={() => handleOptionClick('low-to-high')}
      >
        Price: Low to High
      </div>
      <div
        className={`sort-by-option ${activeOption === 'high-to-low' ? 'active' : ''}`}
        onClick={() => handleOptionClick('high-to-low')}
      >
        Price: High to Low
      </div>
    </div>
  );
}

export default SortBy;
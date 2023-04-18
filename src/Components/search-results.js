import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import SearchComp from './searchbarcomp';
import Filter from './filter';
import ProductCard from './productcard';
import Map from './map';
import SortBy from './sortby';
import Models from './modelsort';
import { useLocation } from 'react-router-dom';
import './search-results.css'
import SearchCompMob from './searchcompmobile';

const SearchResults = ({}) => {
  const [sortByText, setSortByText] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tenure = searchParams.get('tenure');
  const tenure_int = Number(tenure.split('days')[0])
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const [robots, setRobots] = useState([
    {
      id:1,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'OPAL',
      type: 'rent',
      pricePerDay: 3000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Single display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "8 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
      id:2,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'PRISM',
      type: 'advertisement',
      pricePerDay: 2000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
      id:3,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'PRISM',
      type: 'rent',
      pricePerDay: 4000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
  ]);



  const [robotscopy] = useState([
    {
      id:1,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'OPAL',
      type: 'rent',
      pricePerDay: 3000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Single display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "8 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
      id:2,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'PRISM',
      type: 'advertisement',
      pricePerDay: 2000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
      id:3,
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'PRISM',
      type: 'rent',
      pricePerDay: 4000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
  ]);

  const [robot] = useState([
    {
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'OPAL',
      type: 'rent',
      pricePerDay: 3000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "2 Display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'PRISM',
      type: 'advertisement',
      pricePerDay: 2000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "2 Display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
        { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
        { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
  ]);



  
  const handleSort = (text) => {
    setSortByText(text);
    if (text === 'low-to-high') {
      const sortedRobots = [...robots].sort((a, b) => a.pricePerDay - b.pricePerDay);
      setRobots(sortedRobots);
    } else if (text === 'high-to-low') {
      const sortedRobots = [...robots].sort((a, b) => b.pricePerDay - a.pricePerDay);
      setRobots(sortedRobots);
    }
  };

  const [selectedRobot, setSelectedRobot] = useState('');

  
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const handleRobotSelect = (robotName = null) => {
    if (robotName) {
      const filteredRobots = [...robotscopy].filter((robot) => robot.name === robotName);
      setRobots(filteredRobots);
      setSelectedRobot(robotName);
    } else {
      setRobots(robotscopy);
      setSelectedRobot(null);
      console.log(robot)
    }
    

  };

  const handleFilter = (filteredList) => {
    if (JSON.stringify(filteredList) === JSON.stringify(filteredRobots)) {
      // If the filtered list is the same as the previous filtered list, reset the filters
      setSelectedRobot('');
      setRobots(robots);
    } else {
      // Otherwise, apply the new filters
      setSelectedRobot('');
      setFilteredRobots(filteredList);
    }
  };


  

  return (
    <div className="main-container">
      <div style={{display: 'flex', alignItems: 'center' }}>
      <Navbar />
      </div>
      <div className="search-comp-mob-container">
        <SearchCompMob />
      </div>
      <div className="row-container">
        <div className="sidebar-container">
          <SearchComp from={from} to={to} />
          <Filter robots={robots} onFilterChange={handleFilter} />
        </div>
        <div className="main-content-container">
          <div className="header-container">
            <div className="models-container">
              <Models robots={robot} onRobotSelect={handleRobotSelect} />
            </div>
            <div className="map-container">
              <Map />
            </div>
          </div>
          <div className="sort-by-container">
            <h1 className="sort-by-label">Sort by:</h1>
            <SortBy onSort={handleSort} />
          </div>
          <div className="product-card-container">
            {filteredRobots.map((robot) => (
              <ProductCard
                key={robot.id}
                imageSrc={robot.img}
                name={robot.name}
                type={robot.type}
                pricePerDay={robot.pricePerDay}
                features={robot.features}
                description={robot.description}
                tenure={tenure_int}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  


  
};
  


export default SearchResults;

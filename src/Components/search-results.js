import React, { useState } from 'react';
import Navbar from './navbar';
import Search from './searchbar';
import Filter from './filter';
import ProductCard from './productcard';
import Map from './map';
import SortBy from './sortby';
import Models from './models';
const SearchResults = () => {
  const [sortByText, setSortByText] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(null);
const [selectedScreens, setSelectedScreens] = useState(null);
  const [robots, setRobots] = useState([
    {
      img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
      name: 'OPAL',
      type: 'rent',
      pricePerDay: 3000,
      features: [
        { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Single Display" },
        { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "8 Hours" },
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

  const [robot, setRobot] = useState([
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
  

  const handleFilterPrice = (price) => {
    setSelectedPrice(price);
  };

  const filteredRobots = selectedPrice
    ? robots.filter((robot) => robot.pricePerDay <= selectedPrice)
    : robots;

   return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', height: '85%',  }}>
        <div style={{ width: '30%', padding: '20px', paddingLeft: '50px' }}>
          <Search />
          <Filter onFilterPrice={handleFilterPrice} />
        </div>
        <div style={{ width: '65%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex' }}>
    <Models robots={robot} />
    <Map />
  </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', marginRight:'19vw' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '20px', marginBottom:'30px' }}>Sort by:</h1>
            <SortBy onSort={handleSort} />
          </div>
          {filteredRobots.map(robot => (
            <ProductCard
              key={robot.name}
              imageSrc={robot.img}
              name={robot.name}
              type={robot.type}
              pricePerDay={robot.pricePerDay}
              features={robot.features}
              description={robot.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
  


export default SearchResults;

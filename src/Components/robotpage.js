import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './robotpage.css'
import Navbar from "./navbar";
import { Link } from "react-router-dom";
function RobotPage() {
    const { name, type, tenure } = useParams();
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


      const { id } = useParams();
  const robot = robots.find((robot) => robot.name === String(name) && robot.type === String(type));

  if (!robot) {
    return <div>Sorry, no robot found for ID {id}!</div>;
  }

  const {
    img,
    pricePerDay,
    features,
    description,
  } = robot;

  const totalPrice = (pricePerDay * tenure);


  return (
    <div>
      <Navbar></Navbar>
      <div className="product-details">
        <div className="left-hand-side">
          <img src={img} alt={name} />
        </div>
        <div className="right-hand-side">
          <div className="product-name"> {type} {name}</div>
          <div className="product-description">{description}</div>
          <div className="product-features">
            {features.map(({ icon, text }, index) => (
              <div key={index}>
                <img src={icon} alt="" />
                <span className="feature-text">{text}</span>
              </div>
            ))}
          </div>
          <div className="product-price-per-day">
            Price per day AED {pricePerDay}
          </div>
          <div style={{ fontSize: '40px', color: '#12864E', fontWeight: '700', marginLeft: '14vw' }}>AED {totalPrice}</div>
          <div className="product-card__button1">
  <Link to={`/product-details/${name}/${type}/${tenure}/booking`} className="product-card__button1-link" style={{textDecorationLine: 'none'}}>BOOK NOW</Link>
</div>
        </div>
      </div>
    </div>
  );

  
}


  
  export default RobotPage;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productcard.css';
import { useState, useEffect } from 'react';

function ProductCard({ name, description, features, pricePerDay, imageSrc, type, tenure }) {
  const totalPrice = (pricePerDay * tenure);
  const cardClassName = `product-card ${type === 'rent' ? 'product-card--rent' : 'product-card--advertisement'}`;

    // Define a state variable to keep track of whether the user is on a mobile device or not
    const [isMobile, setIsMobile] = useState(false);

    // Use the useEffect hook to update the `isMobile` state variable when the component mounts
    useEffect(() => {
      const isMobileDevice = window.innerWidth < 768; // You can adjust the breakpoint as needed
      setIsMobile(isMobileDevice);
    }, []);
  
    // Define a function that handles the click event for the product card
    const handleProductCardClick = () => {
      if (isMobile) {
        // Do something here that should happen on mobile devices
        window.location.href = `/product-details/${name}/${type}/${tenure}`;
      } else {
        // Do something here that should happen on non-mobile devices
        console.log('Product card clicked');
      }
    };

    return (
      <div className={cardClassName} onClick={handleProductCardClick}>
        <div className="product-card__image-container">
          <img src={imageSrc} alt={name} className="product-card__image" />
        </div>
        <div className="product-card__details-container">
          <div className="product-card__name-container">
            <h2 className="product-card__name">{name}</h2>
          </div>
          <div className="product-card__description-container">
            <p className="product-card__description">{description}</p>
          </div>
          <div className="product-card__features-container">
            {features.map((feature, index) => (
              <div key={index} className="product-card__feature">
                <img src={feature.icon} alt={feature.text} className="product-card__feature-icon" />
                <span className="product-card__feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="product-card__additional-info-container">
            Price per day AED {pricePerDay}
            <div style={{ fontSize: '35px', color: 'green' }}>AED {totalPrice}</div>
            {isMobile ? (
              <div className="product-card__button">
                <button className="product-card__button">VIEW DETAILS</button>
              </div>
            ) : (
              <div className="product-card__button">
                <Link to={`/product-details/${name}/${type}/${tenure}`} className="product-card__buttonlink" style={{textDecorationLine: 'none'}}>VIEW DETAILS</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  

export default ProductCard;

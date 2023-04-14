import React from 'react';
import './productcard.css';

function ProductCard({ name, description, features, pricePerDay, imageSrc, type, tenure }) {
  const totalPrice = (pricePerDay * tenure);
  const cardClassName = `product-card ${type === 'rent' ? 'product-card--rent' : 'product-card--advertisement'}`;
  return (
    <div className={cardClassName}>
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
          <button className="product-card__button">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
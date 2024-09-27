import React from 'react';

const PropertyList = ({ properties, addToCart }) => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <div key={property.id} className="property-item">
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>${property.price}/night</p>
          <button onClick={() => addToCart(property)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

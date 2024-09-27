import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleFilterChange = () => {
    onFilter({ location, price, bedrooms });
  };

  return (
    <div className="filters">
      <h2>Filter by:</h2>
      <label>Location:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      
      <label>Max Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      
      <label>Min Bedrooms:</label>
      <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;

import React from 'react';
import PropertyList from '../components/PropertyList';
import Filters from '../components/Filters';

const Home = ({ properties, onFilter, addToCart }) => {
  return (
    <div className="home-page">
      <h1>Find Your Perfect Rental Property</h1>
      <Filters onFilter={onFilter} />
      <PropertyList properties={properties} addToCart={addToCart} />
    </div>
  );
};

export default Home;

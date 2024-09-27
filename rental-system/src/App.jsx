import React, { useState } from 'react';
import Home from './pages/Home';
import Cart from './components/Booking';
import Checkout from './components/Checkout';

const App = () => {
  const [properties] = useState([
    { id: 1, title: 'Luxury Villa', location: 'Miami', price: 500, bedrooms: 3, image: '../img/villa.jpg' },
    { id: 2, title: 'Beach House', location: 'Los Angeles', price: 300, bedrooms: 2, image: '../img/beach-house.jpg' },
    { id: 3, title: 'City Apartment', location: 'New York', price: 200, bedrooms: 1, image: './img/city-house.jpg' }
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (property) => {
    setCart([...cart, property]);
    setTotal(total + property.price);
  };

  const handleFilter = (filterCriteria) => {
    const filtered = properties.filter(property => {
      return (
        (!filterCriteria.location || property.location.includes(filterCriteria.location)) &&
        (!filterCriteria.price || property.price <= filterCriteria.price) &&
        (!filterCriteria.bedrooms || property.bedrooms >= filterCriteria.bedrooms)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="App">
      <Home properties={filteredProperties} onFilter={handleFilter} addToCart={addToCart} />
      <Cart cart={cart} total={total} />
      <Checkout total={total} />
    </div>
  );
};

export default App;

import React from 'react';

const Cart = ({ cart, total }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((property, index) => (
          <div key={index} className="cart-item">
            <h4>{property.title}</h4>
            <p>Price: ${property.price}</p>
          </div>
        ))
      ) : (
        <p>No properties booked yet.</p>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;

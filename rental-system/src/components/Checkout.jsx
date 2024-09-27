import React from 'react';

const Checkout = ({ total }) => {
  const handleCheckout = () => {
    alert(`Booking confirmed! Total: $${total}`);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
      <button onClick={handleCheckout}>Confirm Booking</button>
    </div>
  );
};

export default Checkout;

import React, { useState } from 'react';
import "./Payment.css"
import NavBar from '../../components/NavBar/NavBar';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  
  const handlePayment = (method) => {
    setSelectedMethod(method);
    if (method === 'visa') {
      alert('Redirecting to Visa payment...');
      // You can implement actual Visa payment logic here
    } else if (method === 'paypal') {
      alert('Redirecting to PayPal payment...');
      // You can implement actual PayPal payment logic here
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="payment-container">
      <h1>Pay At Cinema</h1>
      <div className="payment-details">
        <div class="amount"><p>Total Amount: $100</p></div>
        
        <label htmlFor="payment-option">Select Payment Option:</label>
        
            <button
              className={selectedMethod === 'visa' ? 'selected' : ''}
              onClick={() => handlePayment('visa')}
            >
              Visa
            </button>
            <button
              className={selectedMethod === 'paypal' ? 'selected' : ''}
              onClick={() => handlePayment('paypal')}
            >
              PayPal
            </button>
        <button onClick={handlePayment}>Pay</button>
      </div>
    </div>
    </div>
  );
}

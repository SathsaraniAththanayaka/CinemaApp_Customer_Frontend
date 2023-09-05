import React, { useState } from 'react';
import "./Payment.css"
import NavBar from '../../components/NavBar/NavBar';
import visaImage from '../../images/visaImage.jpg'
import paypalImage from '../../images/paypalImage.jpg'
import { useParams, useNavigate} from 'react-router-dom';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const { bookingid,totalPrice} = useParams();
  const navigate = useNavigate();
  
  const handlePayment = (method) => {
    setSelectedMethod(method);
    if (method === 'visa') {
      alert('Redirecting to Visa payment...');
     
    } else if (method === 'paypal') {
      alert('Redirecting to PayPal payment...');
      
    }else if (method === 'cash') {
      alert(`Your reservation (ID: ${bookingid}) has been recorded. Please pay in cash when you arrive at the venue.`);
      navigate(`/thankyou/${bookingid}`)
    } 
  };

  return (
    <div>
      <NavBar />
      <div className="payment-container">
        <h1>Complete Your Payment</h1>
        <div className="payment-details">
          <p className="amount">Total Amount: Rs.{totalPrice}</p>
          <p className="method-label">Select Payment Method:</p>
          <div className="payment-buttons">
          <button
              className={`payment-option ${selectedMethod === 'cash' ? 'selected' : ''}`}
              onClick={() => handlePayment('cash')}
            >
              <img src={paypalImage} alt="cash" className="payment-icon" />
              Cash
            </button>
            <button
              className={`payment-option ${selectedMethod === 'visa' ? 'selected' : ''}`}
              onClick={() => handlePayment('visa')}
            >
              <img src={visaImage} alt="Visa" className="payment-icon" />
              Credit Card
            </button>
            <button
              className={`payment-option ${selectedMethod === 'paypal' ? 'selected' : ''}`}
              onClick={() => handlePayment('paypal')}
            >
              <img src={paypalImage} alt="PayPal" className="payment-icon" />
              PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import "./ThankYou.css"; // Styles for the invoice
import { useParams ,useNavigate} from 'react-router-dom';

export default function ThankYou() {
  // Extract relevant data from reservation and customer props
  const {bookingid} = useParams(); 

  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <div className="invoice-details">
        <p><strong>Invoice ID:</strong> 0{bookingid}</p>
        <p><strong>Customer Name:</strong> </p>
        <p><strong>Customer Email:</strong></p>
        <p><strong>Theater:</strong></p>
        <p><strong>City:</strong></p>
        <p><strong>Movie:</strong></p>
        <p><strong>Date:</strong></p>
        <p><strong>Time:</strong></p>
        <p><strong>Seat Category:</strong></p>
        <p><strong>Seat Price:</strong></p>
        <p><strong>No. of Seats:</strong></p>
        

        
      </div>
      
      <div className="invoice-total">
        <p>Total Amount: </p>
      </div>
    </div>
  );
}

import React from 'react'
import "./SeatSelection.css"
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

export default function SeatSelection() {
    const { name, date, time } = useParams(); // Get the parameters from the URL
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Standard');
  const [numOfSeats, setNumOfSeats] = useState(1);

  const navigate = useNavigate();
  
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  
  const handleConfirmClick = () => {
    // Logic to handle seat confirmation
    navigate(`/payment`);
    console.log('Selected seats:', selectedSeats);
  };
  return (
    <div>
      <NavBar />
      <div className="seat-selection-container">
        <h2>Seat Selection</h2>
        <p>Place: {name}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>

        <div className="seat-categories">
          <div className="category-selector">
            <p>Select Category:</p>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              
              <option value="ODC">ODC</option>
              <option value="BOX">BOX</option>
              <option value="Balcony">Balcony</option>
            </select>
          </div>
          <div className="category">
            <p>{selectedCategory}</p>
            <div className="num-of-seats">
          <label>Number of Seats:</label>
          <input
            type="number"
            value={numOfSeats}
            onChange={(e) => setNumOfSeats(Number(e.target.value))}
          />
        </div>
          </div>
        </div>

        

        <div className="buttons">
          <Link to={`/available-schedule`} className="cancel-button">
            Cancel
          </Link>
          <button onClick={handleConfirmClick} className="confirm-button">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}


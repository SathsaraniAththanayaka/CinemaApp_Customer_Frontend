import React from 'react'
import "./SeatSelection.css"
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import {FetchAvailableSeat} from '../../Services/FetchAvailableSeat'
import { ReserveConfirmation } from '../../Services/ReserveConfirmation';
import { getFromSession } from '../../Handlers/DataHandler';

export default function SeatSelection() {
  const { theaterid, name, date, time ,id} = useParams(); // Get the parameters from the URL
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [numOfSeats, setNumOfSeats] = useState(1);
  const [availableSeats, setAvailableSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableSeats = async () => {
      try {
        const data = await FetchAvailableSeat(id,theaterid); 
        setAvailableSeats(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAvailableSeats();
  }, [id]);
  
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  
  const handleConfirmClick = async () => {
    // Logic to handle seat confirmation
    const selectedCategoryObj = availableSeats.find(seat => seat.seatType === selectedCategory);
    const categoryPrice = selectedCategoryObj.price;
    const totalPrice = categoryPrice * numOfSeats;
    
    const bookingid = await ReserveConfirmation(getFromSession('id'),id,selectedCategory,numOfSeats);
    console.log(bookingid);
    navigate(`/confirm-payment/${bookingid}/${totalPrice}/${selectedCategory}/${numOfSeats}/${id}`);
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
        <p>Available Seats</p>
        <table className="available-seats-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Available Seats</th>
              <th>Seat Price</th>
            </tr>
          </thead>
          <tbody>
            {availableSeats.map((seat) => (
              <tr key={seat.seatType}>
                <td>{seat.seatType}</td>
                <td>{seat.seatNo}</td>
                <td>{seat.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="seat-categories">
          <div className="category-selector">
            <p>Select Category:</p>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {availableSeats.map((seat) => (
                <option key={seat.seatType} value={seat.seatType}>
                  {seat.seatType}
                </option>
              ))}
            </select>
          </div>
        </div>
          <div className="category">
           
            <div className="num-of-seats">
          <label>Number of Seats:</label>
          <input
            type="number"
            value={numOfSeats}
            onChange={(e) => setNumOfSeats(Number(e.target.value))}
          />
        </div>
          </div>
       

        

        <div className="buttons">
          {/* <Link to={`/available-schedule`} className="cancel-button">
            Cancel
          </Link> */}
          <button onClick={handleConfirmClick} className="confirm-button">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}


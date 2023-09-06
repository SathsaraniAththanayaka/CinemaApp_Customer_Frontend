import React, { useState , useEffect} from 'react';
import "./Payment.css"
import NavBar from '../../components/NavBar/NavBar';
import { useParams ,useNavigate} from 'react-router-dom';
import { BookingRequest } from '../../Services/BookingRequest';
import { getFromSession } from '../../Handlers/DataHandler';
import { GetDetails } from '../../Services/GetDetails';
import { GetConfirm } from '../../Services/GetConfirm';

export default function ConfirmPayment() {
    const { bookingid,totalPrice,selectedCategory,numOfSeats,id } = useParams();
    const navigate = useNavigate();
    const [customerName, setCustomerName] = useState('');

    useEffect(() => {
        const fetchCustomerName = async () => {
            try {
                const name = await GetDetails(getFromSession('id'));
                setCustomerName(name);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCustomerName();
    }, []);



    const handleConfirm = async () => {
        console.log(customerName);
        await BookingRequest(bookingid,getFromSession('id'),customerName,getFromSession('email'),id,selectedCategory,numOfSeats)
        const response = await GetConfirm(bookingid);
        console.log(response);
        if(response == "Reservation Successfully Done..."){
          navigate(`/payment/${bookingid}/${totalPrice}`);
        }
        else{
          alert("Reservation denied! Please reserve another show proceed...");
        }
        
      };

  

  return (
    <div>
      <NavBar />
      <div className="payment-container">
        <h1>To proceed confirm your reservation ...</h1>
        <div className="payment-details">
          <p className="amount">Total Amount: Rs.{totalPrice}</p>  
        </div>

        <button
            className="confirm-button"
            onClick = {handleConfirm}
          >
            Confirm Reservation
          </button>
        
      </div>
    </div>
  );
}

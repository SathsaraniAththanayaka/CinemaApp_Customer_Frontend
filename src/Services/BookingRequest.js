import React from 'react'
import axios from 'axios';
import { getFromSession } from '../Handlers/DataHandler';

const BASE_URL = "http://localhost:8080/customer/kafka/bookings";

export const BookingRequest = async (bookingID,customerID,name,customerEmail,showId,seatCategory,noOfBookedSeats) => {
    try {
      await axios.post(BASE_URL,{
        bookingID,
        customerID,
        name,
        customerEmail,
        showId,seatCategory,
        noOfBookedSeats
      },{
        auth: {
          username: getFromSession('username'), 
          password: getFromSession('password'), 
        },
      });
      
    } catch (error) {
      console.error(error);
      return [];
    }
};

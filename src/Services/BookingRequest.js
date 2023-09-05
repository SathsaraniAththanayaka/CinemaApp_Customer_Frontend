import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/kafka/bookings";

export const BookingRequest = async (bookingID,customerID,name,customerEmail,showId,seatCategory,noOfBookedSeats) => {
    try {
      await axios.post(BASE_URL,{
        bookingID,
        customerID,
        name,
        customerEmail,
        showId,seatCategory,
        noOfBookedSeats
      });
      
    } catch (error) {
      console.error(error);
      return [];
    }
};

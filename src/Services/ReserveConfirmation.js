import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/bookings";

export const ReserveConfirmation = async (customerid,showid,seatCategory,noOfSeats) => {
    try {
      const response = await axios.post(BASE_URL,{
        customerid,
        showid,
        seatCategory,
        noOfSeats
      });

      return response.data;
      
    } catch (error) {
      console.error(error);
      return [];
    }
  };

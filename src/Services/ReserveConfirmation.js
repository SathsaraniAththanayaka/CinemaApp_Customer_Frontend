import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/kafka/bookings";

export const ReserveConfirmation = async (showid,seatCategory,seatNo) => {
    try {
      await axios.post(BASE_URL,{
        showid,
        seatCategory,
        seatNo
      });
      
    } catch (error) {
      console.error(error);
      return [];
    }
  };

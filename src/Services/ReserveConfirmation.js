import React from 'react'
import axios from 'axios';
import { getFromSession } from '../Handlers/DataHandler';

const BASE_URL = "http://localhost:8080/customer/bookings";

export const ReserveConfirmation = async (customerid,showid,seatCategory,noOfSeats) => {
    try {
      const response = await axios.post(BASE_URL,{
        customerid,
        showid,
        seatCategory,
        noOfSeats
      },{
        auth: {
          username: getFromSession('username'), 
          password: getFromSession('password'), 
        },
      });

      return response.data;
      
    } catch (error) {
      console.error(error);
      return [];
    }
  };

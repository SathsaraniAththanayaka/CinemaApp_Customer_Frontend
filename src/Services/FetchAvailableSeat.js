import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/seat";

export const FetchAvailableSeat = async (showid) => {
    try {
      const response = await axios.get(`${BASE_URL}?showid=${showid}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

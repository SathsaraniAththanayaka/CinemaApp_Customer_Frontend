import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/seat";

export const FetchAvailableSeat = async (showid,theaterid) => {
    try {
      const response = await axios.get(`${BASE_URL}?showid=${showid}&theaterid=${theaterid}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

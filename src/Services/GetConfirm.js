import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/confirm";

export const GetConfirm = async (bookingid) => {
    try {
      const response = await axios.get(`${BASE_URL}?bookingid=${bookingid}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};

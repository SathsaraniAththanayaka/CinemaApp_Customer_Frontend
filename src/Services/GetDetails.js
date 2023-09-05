import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/details";

export const GetDetails = async (customerid) => {
    try {
      const response = await axios.get(`${BASE_URL}?customerid=${customerid}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};


import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/shows";

export const FetchSchedules = async (movieid) => {
    try {
      const response = await axios.get(`${BASE_URL}?movieid=${movieid}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
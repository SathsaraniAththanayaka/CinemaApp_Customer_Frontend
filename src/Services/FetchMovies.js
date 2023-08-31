import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8090/customer/movie";

export const FetchMovies = async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};

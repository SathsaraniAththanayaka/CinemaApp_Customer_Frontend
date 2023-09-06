import React from 'react'
import axios from 'axios';
import { getFromSession } from '../Handlers/DataHandler';

const BASE_URL = "http://localhost:8080/customer/movie";

export const FetchMovies = async () => {
    try {
      const response = await axios.get(BASE_URL,
        {
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

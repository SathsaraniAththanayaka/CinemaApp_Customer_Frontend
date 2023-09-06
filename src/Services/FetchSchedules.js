
import React from 'react'
import axios from 'axios';
import { getFromSession } from '../Handlers/DataHandler';

const BASE_URL = "http://localhost:8080/customer/shows";

export const FetchSchedules = async (movieid) => {
    try {
      const response = await axios.get(`${BASE_URL}?movieid=${movieid}`,
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
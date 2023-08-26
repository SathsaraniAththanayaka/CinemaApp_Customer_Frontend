import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../../Pages/SearchMovie/Movies.json";
import "./ReserveMovie.css"
import NavBar from '../../components/NavBar/NavBar';
export default function ReserveMovie() {
    const { id } = useParams(); // Get the movie ID from the URL parameter
    const [movie, setMovie] = useState(null);

    useEffect(() => {
       // Simulate an asynchronous fetch from an API
    const fetchMovieDetails = async () => {
        try {
          // Add a delay to simulate a real API call
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Fetch movie details based on the ID
          const selectedMovie = data.find(item => item.id === parseInt(id));
          setMovie(selectedMovie);
        } catch (error) {
          console.error(error);
          
        }
      };

      fetchMovieDetails();
  }, [id]);
    
      if (!movie) {
        return <div>Loading...</div>;
      }
  return (
    <div class = "reserveBack">
        
    <div className="reserve-container">
      <h2 className="reserve-title">Available Places and Times for {movie.title}</h2>
      {movie.places.map((place, placeIndex) => (
        <div key={placeIndex} className="place-container">
          <h3 className="place-name">{place.name}</h3>
          {place.schedule.map((scheduleItem, scheduleIndex) => (
            <div key={scheduleIndex} className="schedule-container">
              <p className="schedule-date">Date: {scheduleItem.date}</p>
              <div className="time-buttons">
                {scheduleItem.times.map((time, timeIndex) => (
                  <Link
                    key={timeIndex}
                    to={`/seat-selection/${place.name}/${scheduleItem.date}/${time}`}
                  >
                    <button className="time-button">{time}</button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  )
}

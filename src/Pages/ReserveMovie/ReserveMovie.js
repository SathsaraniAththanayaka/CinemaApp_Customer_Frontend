import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../../Pages/SearchMovie/Movies.json";
import "./ReserveMovie.css"
import NavBar from '../../components/NavBar/NavBar';
import { FetchSchedules } from '../../Services/FetchSchedules';


export default function ReserveMovie() {
    const { id } = useParams(); // Get the movie ID from the URL parameter
    const [movie, setMovie] = useState(null);

    useEffect(() => {
       // Simulate an asynchronous fetch from an API
    const fetchMovieDetails = async () => {
        try {
          const scheduleData = await FetchSchedules(id);
          await new Promise(resolve => setTimeout(resolve, 100));
          
         
          // const selectedMovie = movieData.find(item => item.movieid === parseInt(id));
           setMovie(scheduleData);
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
      <h2 className="reserve-title">Reserve your show</h2>
      {movie.theaters.map((theater, theaterIndex) => (
        <div key={theaterIndex} className="place-container">
          <h3 className="place-name">{theater.theaterName}</h3>
          {theater.dates.map((dateItem, dateIndex) => (
            <div key={dateIndex} className="schedule-container">
              <p className="schedule-date">Date: {dateItem.date}</p>
              <div className="time-buttons">
                {dateItem.times.map((timeObj, timeIndex) => (
                  <Link
                    key={timeIndex}
                    to={`/seat-selection/${theater.theaterid}/${theater.theaterName}/${dateItem.date}/${timeObj.time}/${timeObj.scheduleid}`}
                  >
                    <button className="time-button">{timeObj.time}</button>
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

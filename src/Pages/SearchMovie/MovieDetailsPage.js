import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FetchMovies } from '../../Services/FetchMovies';
import "./MovieDetailsPage.css"

export default function MovieDetailsPage() {
    const { id } = useParams(); // Get the movie ID from the URL parameter
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
       
    const fetchMovieDetails = async () => {
        try {
          const movieData = await FetchMovies();
          setMovies(movieData);
          //await new Promise(resolve => setTimeout(resolve, 100));
          
          
          const selectedMovie = movieData.find(item => item.movieid === parseInt(id));
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
    <div>
        <NavBar/>
        <div class = "detailedContainer">
            <div className="details-container">
                <div className="image-container">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className="details-content">
                    <h2>{movie.title}</h2>
                    <p>Description: {movie.description}</p>
                    <p>Language: {movie.language}</p>
                    <p>Duration: {movie.duration}</p>
                    <p>Released Date: {movie.releaseDate}</p>
                    <Link to={`/available-schedule/${id}`}
                        className="custom-button">Book Now
                    </Link>   
                </div>
            </div>
        </div>
        
    </div>
  )
}

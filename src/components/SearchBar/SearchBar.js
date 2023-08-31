import React from 'react'
import "./SearchBar.css"
import * as AiIcons from 'react-icons/ai'
import data from "../../Pages/SearchMovie/Movies.json"
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { Card, Input } from 'antd';
import {FetchMovies} from "../../Services/FetchMovies"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      const movieData = await FetchMovies();
      setMovies(movieData);
    };

    fetchAndSetMovies();
  }, []);
  return (
    <div>
        <form>
        
        <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here for movies..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            movies 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <Link to={`/movie/${val.movieid}`} key={val.movieid} className="template">
                  <Card // Use Ant Design Card component
                    cover={<img src={val.image} alt="" />}
                    title={val.title}
                  >
                  {/* <p className="price">${val.price}</p> */}
                  </Card>
                  </Link>
                )
              })
          }
        </div>
      </div>

            

           
            
        </form>
    </div>
  )
}

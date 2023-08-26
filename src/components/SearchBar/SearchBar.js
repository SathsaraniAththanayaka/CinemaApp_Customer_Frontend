import React from 'react'
import "./SearchBar.css"
import * as AiIcons from 'react-icons/ai'
import data from "../../Pages/SearchMovie/Movies.json"
import {useState} from "react";
import { Link } from 'react-router-dom';
import { Card, Input } from 'antd';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); 
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
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <Link to={`/movie/${val.id}`} key={val.id} className="template">
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

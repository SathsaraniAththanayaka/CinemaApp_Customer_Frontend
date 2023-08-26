import React from 'react'
import "./DefaultHome.css"
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'

export default function DefaultHome() {
  return (
    <div>
      <NavBar/>
      <SideBar/>
    <div class = "defaultContainer">
      
        <h2>Your Gateway to Cinematic Excellence!</h2>
        <p>Welcome to our state-of-the-art movie booking platform, where cinematic magic meets unparalleled 
            convenience! Immerse yourself in the world of entertainment as you browse through an extensive 
            selection of the latest blockbusters and timeless classics. With user-friendly navigation, 
            secure transactions, and real-time seat availability, your movie-going experience has never been 
            smoother. Whether you're a solo film enthusiast or planning a memorable outing with friends and family, 
            our platform offers seamless booking options to cater to all your preferences. Elevate your movie nights 
            with us and make every screening an unforgettable adventure. Book now and let the silver screen 
            excitement unfold!</p>
    </div>
    </div>
  )
}

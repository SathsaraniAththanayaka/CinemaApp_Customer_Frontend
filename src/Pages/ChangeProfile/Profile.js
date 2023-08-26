import React from 'react'
import {  useState } from "react";
import axios from "axios";
import NavBar from '../../components/NavBar/NavBar.js';
import SideBar from '../../components/SideBar/SideBar.js';
import { useParams} from 'react-router-dom';
import {getFromSession} from "../../Handlers/DataHandler";

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, checkPassword] = useState("");

    const { id } = useParams();
    const handleUpdateProfile = async () => {
      try {
        if(password === confirmPassword){
          const response = await axios.put("http://localhost:8090/customer/edit", {
            customerid:id,
            customerName: name,
            email: email, 
            password: password,
        },
        {
          auth: {
            username: getFromSession('username'), 
            password: getFromSession('password'), 
          },
        }
        );
        alert("Updated your profile successfully")
        }
        else{
          alert("Password unmatched")
        }
         
          
      } catch (error) {
          alert("An Error occured")
      }
  };
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <div class = "container">
        <div class="row">
          <h2>Change your profile</h2>
        </div>

        <div class="row">
          <form class = "form">
            <div class="form-group">
              <label>Change your name</label>
              <input type="text"  class="form-control" id="name" placeholder="Enter name"
                value={name}
                onChange={(event) => {
                setName(event.target.value);}}/>
            </div>

            <div class="form-group">
              <label>Change your email</label>
              <input type="email"  class="form-control" id="email" placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                setEmail(event.target.value);}}/>
            </div>

            <div class="form-group">
              <label>Change your password</label>
              <input type="password"  class="form-control" id="password" placeholder="Enter Password" 
                value={password}
                onChange={(event) => {
                setPassword(event.target.value);}}/>
            </div>

            <div class="form-group">
              <label>Confirm your password</label>
              <input type="password"  class="form-control" id="password" placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(event) => {
                checkPassword(event.target.value);}}/> 
            </div>
          </form>
        </div>

        <div class = "loginButton">
          <button type="submit" class="btn btn-primary" onClick={handleUpdateProfile}>Update</button>     
        </div>
      </div>
    </div>
  )
}

export default Profile;

import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {  useState } from "react";

export default function ForgotPwd() {
    const [email, setEmail] = useState("");
  return (
    <div>
          <NavBar/>
          <div class="container" >
            <div class="row">
              <h2>Reset Password</h2>
            </div>

            <div class="row">
                <form>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email"  class="form-control" id="email" placeholder="Enter Email"
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                    }}
                  />
                </div>
                </form>
            </div>

            <div class = "loginButton">
                <button type="submit" class="btn btn-primary mt-4" >Reset</button>
            </div>

        </div>
    </div>
  )
}

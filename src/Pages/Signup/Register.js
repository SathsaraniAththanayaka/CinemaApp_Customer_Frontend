import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import "./Register.css"

function Register() {
    const [customername, setCustomername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, checkPassword] = useState("");

    const [customernameError, setCustomernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
          if(password === confirmPassword){
            await axios.post("http://localhost:8090/customer/register", {
              customerName: customername,
              email: email, 
              password: password,
            }).then((res) => {
              console.log(res.data);
              if(res.data === "Email already exists"){
                alert("Email already exists");
              }
              else{
                alert("Customer Registation Successfully");
                navigate('/'); 
              }
            });
            
          }
          else{
            alert("Password unmatched")
          }
        } catch (err) {
          alert(err); 
        }
    }    
    const handleCustomerNameBlur = () => {
      if (customername.trim() === "") {
        setCustomernameError("User name is required");
      } else {
        setCustomernameError("");
      }
    };
    const handleEmailBlur = () => {
      if (email.trim() === "") {
        setEmailError("Email is required");
      } else {
        setEmailError("");
      }
    };
    const handlePasswordBlur = () => {
      if (password.trim() === "") {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    };
    const handleConfirmPasswordBlur = () => {
      if (confirmPassword.trim() === "") {
        setConfirmPasswordError("Confirm your password");
      } else {
        setConfirmPasswordError("");
      }
    };
    return (
        <div>
          <NavBar/>
          <div class="registerContainer" >
            <div class="row">
              <h2>Sign Up</h2>
            </div>

            <div class="row">
              <form>
                <div class="form-group">
                  <label>User name</label>
                  <input type="text"  class="form-control" id="customername" placeholder="Enter Name"
                    value={customername}
                    onChange={(event) => {
                    setCustomername(event.target.value);
                    }}
                    onBlur={handleCustomerNameBlur}
                  />
                  {customername === "" && <small className="text-danger">{customernameError}</small>}
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input type="email"  class="form-control" id="email" placeholder="Enter Email"
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                    }}
                    onBlur={handleEmailBlur}
                  />
                  {email === "" && <small className="text-danger">{emailError}</small>}
                  {email !== "" && !/^\S+@\S+\.\S+$/.test(email) && (
                  <small className="text-danger">Enter a valid email address</small>
                  )}
                </div>

              <div class="form-group">
                <label>Password</label>
                <input type="password"  class="form-control" id="password" placeholder="Enter password"
                
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                onBlur={handlePasswordBlur}
                minLength="8" // Minimum length of 8 characters
    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$" // Requires lowercase, uppercase, and number
  />
                {password === "" && <small className="text-danger">{passwordError}</small>}
  {password !== "" && password.length < 8 && (
    <small className="text-danger">Password must be at least 8 characters</small>
  )}
  {password !== "" && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password) && (
    <small className="text-danger">
      Password must contain at least one lowercase letter, one uppercase letter, and one number
    </small>
  )}
              </div>

              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password"  class="form-control" id="ConfirmPassword" placeholder="Enter password"
                
                value={confirmPassword}
                onChange={(event) => {
                  checkPassword(event.target.value);
                }}
                onBlur={handleConfirmPasswordBlur}
                />
                {confirmPassword === "" && <small className="text-danger">{confirmPasswordError}</small>}
  {confirmPassword !== "" && confirmPassword !== password && (
    <small className="text-danger">Passwords do not match</small>
  )}
              </div>
            
           
          </form>
        </div>
        <div class = "loginButton">
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
        </div>

        <div>
            <p>Already have an account?&nbsp;
              <a href = "http://localhost:3000/">Sign In</a>
            </p>
          </div>
        </div>
         </div>
    );
  }
  
  export default Register;
  
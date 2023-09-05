import {  useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Login.css"
import NavBar from "../../components/NavBar/NavBar";
import {setToSession,getFromSession} from "../../Handlers/DataHandler";
import { useAuth } from "../../Auth/AuthContext";

function Login() {
    const { loginAuth,authenticated } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [id, setId] = useState(-1);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    async function login(event) {
        event.preventDefault();
        
        try {
          await axios.post("http://localhost:8090/customer/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exists");
             } 
             else if(res.data.message === "Login Success")
             { 
                
               
                alert("Login successful");
                setToSession('id',res.data.id);
                setToSession('username',email);
                setToSession('password',password);
                loginAuth();
                
                
             } 
              else 
             { 
                alert("Incorrect Email and Password");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }

       
      
      }
      useEffect(() => {
        console.log("useEffect triggered");
        if (authenticated) {
          console.log(authenticated);
          navigate(`/home/${getFromSession('id')}`)
        }
      }, [authenticated]);
     
     
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
    return (
        <div>
          <NavBar/>
          <div class="container">
            <div class="row">
              <h2>Sign In</h2>
            </div>
         
            <div class="row">
              <form class = "form">
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
                </div>

                <div class="form-group">
                  <label>password</label>
                  <input type="password"  class="form-control" id="password" placeholder="Enter Password" 
                    value={password}
                    onChange={(event) => {
                    setPassword(event.target.value);
                    }}
                    onBlur={handlePasswordBlur}
                  />
                   {password === "" && <small className="text-danger">{passwordError}</small>}
                   <div>
                   <a href = "http://localhost:3000/resetpwd" class = "forgotPassword">Forgot Password?</a>
                   </div>
                 
                </div>
              </form>
            </div>

            <div class = "loginButton">
              <button type="submit" class="btn btn-primary" onClick={login} >Login</button>     
            </div>
          
            <div>
              <p>Don't you have an account?&nbsp;
               <a href = "http://localhost:3000/register">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
    );
  }
  
  export default Login;
  
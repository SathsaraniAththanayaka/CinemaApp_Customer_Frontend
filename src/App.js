import Register from "./Pages/Signup/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Signin/Login";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/ChangeProfile/Profile";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import DefaultHome from "./Pages/HomePage/DefaultHome";
import Movies from "./Pages/SearchMovie/movies"
import ForgotPwd from "./Pages/ForgotPassword/ForgotPwd";
import MovieDetailsPage from "./Pages/SearchMovie/MovieDetailsPage";
import Payment from "./Pages/Payment/Payment";
import ReserveMovie from "./Pages/ReserveMovie/ReserveMovie";
import SeatSelection from "./Pages/ReserveMovie/SeatSelection";
import ConfirmPayment from "./Pages/Payment/ConfirmPayment";
import ThankYou from "./Pages/ThankYou/ThankYou";
import { AuthProvider } from "./Auth/AuthContext";
import { useAuth } from "./Auth/AuthContext";
import { Navigate } from 'react-router-dom';
import LogOut from "./Pages/Logout/LogOut";

function App() {
  const { authenticated } = useAuth();
  console.log(authenticated);
  return (
    <div class = "app">
      
        <BrowserRouter>
        
            <Routes>
              <Route path="/" element={ <Login />}/>
              <Route path="/home/:id" element= {authenticated? <Home/> : <Navigate to="/" />} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/resetpwd" element={<ForgotPwd/>}/>
              <Route path="/home/profile/:id" element={authenticated ? <Profile/> : <Navigate to="/" />}/>
              <Route path="/home page" element={authenticated ? <DefaultHome/> : <Navigate to="/" />}/>
              <Route path="/home/movies" element={authenticated ? <Movies/> : <Navigate to="/" />}/>
              <Route path="/movie/:id" element={authenticated ? <MovieDetailsPage/> : <Navigate to="/" />}/>
              <Route path="/payment" element={authenticated ? <Payment/> : <Navigate to="/" />}/>
              <Route path="/available-schedule/:id" element={authenticated ? <ReserveMovie/> : <Navigate to="/" />}/>
              <Route path="/seat-selection/:theaterid/:name/:date/:time/:id" element={authenticated ? <SeatSelection/> : <Navigate to="/" />}/>
              <Route path="/payment/:bookingid/:totalPrice" element={authenticated ? <Payment/> : <Navigate to="/" />}/>
              <Route path="/confirm-payment/:bookingid/:totalPrice/:selectedCategory/:numOfSeats/:id" element={authenticated ? <ConfirmPayment/> : <Navigate to="/" />}/>
              <Route path="/thankyou/:bookingid" element={authenticated ? <ThankYou/> : <Navigate to="/" />}/>
              <Route path="/logout" element={authenticated ? <LogOut/> : <Navigate to="/" />}/> 
            </Routes>
            
        </BrowserRouter>
         
      
    </div>
    
  );
}

export default App;
